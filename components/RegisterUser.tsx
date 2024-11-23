import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "@/lib/firebase";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterUser = ({ onSuccess }) => {
  const [error, setError] = useState<string | null>(null);
  const form = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (data: FormData) => {
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(data.email, data.password);
      if (userCredential) {
        sessionStorage.setItem('user', 'true');
        onSuccess();
      }
    } catch (e: any) {
      console.error(e);
      setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
    }
  };

  useEffect(() => {
    if (firebaseError) {
      if (firebaseError.code === 'auth/email-already-in-use') {
        setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
      } else {
        setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
      }
    }
  }, [firebaseError]);

  return (
    <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-6">
      <div className="grid gap-4 grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="firstName">الاسم الأول</label>
          <Input
            id="firstName"
            placeholder="خالد"
            required
            disabled={loading}
            {...form.register('firstName')}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName">اسم العائلة</label>
          <Input
            id="lastName"
            placeholder="أحمد"
            required
            disabled={loading}
            {...form.register('lastName')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email">البريد الإلكتروني</label>
        <Input
          id="email"
          type="email"
          placeholder="khalid@email.com"
          required
          disabled={loading}
          {...form.register('email')}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password">كلمة المرور</label>
        <Input
          id="password"
          type="password"
          placeholder="8 أحرف على الأقل"
          required
          disabled={loading}
          minLength={8}
          {...form.register('password')}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'جارٍ التسجيل...' : 'إنشاء حساب'}
      </Button>
    </form>
  );
};

export default RegisterUser;