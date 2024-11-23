import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // تحديث الحالة لتعرض واجهة المستخدم البديلة
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // يمكنك تسجيل الخطأ هنا أو إرساله إلى خدمة تتبع الأخطاء
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // يمكنك تخصيص واجهة المستخدم البديلة هنا
      return <h1>حدث خطأ ما. الرجاء المحاولة لاحقًا.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;