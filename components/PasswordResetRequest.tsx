import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PasswordResetRequest = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
    } catch (error) {
      setMessage('حدث خطأ أثناء محاولة إعادة تعيين كلمة المرور. تأكد من صحة البريد الإلكتروني.');
      console.error("Password reset error:", error);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="email"
        placeholder="أدخل بريدك الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
      />
      <Button
        onClick={handlePasswordReset}
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
      >
        إعادة تعيين كلمة المرور
      </Button>
      {message && <p className="text-sm text-zinc-400">{message}</p>}
    </div>
  );
};

export default PasswordResetRequest;