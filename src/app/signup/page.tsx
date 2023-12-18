import { SignUpForm } from '@/components/form/SignUpForm';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-10">회원가입</h1>
      <SignUpForm />
    </div>
  );
}
