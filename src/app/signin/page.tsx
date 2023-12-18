import { SignInForm } from '@/components/form/SignInForm';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-10">로그인</h1>
      <SignInForm />
    </div>
  );
}
