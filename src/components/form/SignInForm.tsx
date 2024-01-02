'use client';

import qs from 'qs';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSetAtom } from 'jotai';

import User from '@/services/user';

import { userInfoAtom } from '@/store/user';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';

const formSchema = z.object({
  id: z.string().min(10, { message: 'ID는 최소 10자리 숫자여야 합니다' }),
  // .regex(/^\d+$/, { message: 'ID는 숫자만 포함해야 합니다' }),
  password: z
    .string()
    .min(8, { message: '패스워드는 최소 8자 이상이어야 합니다' })
    .max(15, { message: '패스워드는 15자를 초과할 수 없습니다' }),
  // .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/, {
  //   message: '패스워드는 영문, 숫자, 특수문자를 각각 최소 1개 이상 포함해야 합니다',
  // }),
});

export function SignInForm() {
  const router = useRouter();
  const setUserInfo = useSetAtom(userInfoAtom);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>): Promise<void> => {
    try {
      const params = {
        user: {
          email: values.id,
          password: values.password,
        },
      };

      const res = User.Login(params);
      if (!res) {
        throw new Error('Login failed');
      }

      setUserInfo(res.data);
      router.push('/');
    } catch (error) {
      // 로그인 실패 시 에러 처리
      console.error('Login error:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[400px] mb-5">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>사업자등록번호(ID)</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  maxLength={15}
                  placeholder="사업자 등록번호를 입력해주세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  maxLength={15}
                  placeholder="비밀번호를 입력해주세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center justify-start">
          <div className="flex items-center space-x-2">
            <Checkbox id="saveLogin" />
            <label
              htmlFor="saveLogin"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              로그인 상태 유지
            </label>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <Checkbox id="saveId" />
            <label
              htmlFor="saveId"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              아이디 저장
            </label>
          </div>
        </div>
        <Button type="submit" size="lg" className="w-full">
          로그인
        </Button>
      </form>
      <div className="flex flex-row">
        <Link href="/signup" className="text-sm text-gray-400 font-normal">
          회원가입
        </Link>
        <div className="text-sm text-gray-400 font-normal mx-1">|</div>
        <Link href="/find/password" className="text-sm text-gray-400 font-normal">
          비밀번호 찾기
        </Link>
      </div>
    </Form>
  );
}

export default SignInForm;
