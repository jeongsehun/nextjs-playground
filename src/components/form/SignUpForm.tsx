'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';

const formSchema = z.object({
  id: z.string().min(2, {
    message: 'id must be at least 2 characters.',
  }),
  companyName: z.string().min(2, {
    message: 'id must be at least 2 characters.',
  }),
  userName: z.string().min(2, {
    message: 'name must be at least 2 characters.',
  }),
  birth: z.string().min(2, {
    message: 'birth must be at least 2 characters.',
  }),
  phone: z.string().min(2, {
    message: 'phone must be at least 2 characters.',
  }),
  email: z.string().min(2, {
    message: 'email must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'password must be at least 2 characters.',
  }),
  passwordCheck: z.string().min(2, {
    message: 'password must be at least 2 characters.',
  }),
});

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[400px]">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>사업자 등록번호 ( ID / ‘-’ 없이 입력 )</FormLabel>
              <FormControl>
                <Input placeholder="사업자 등록번호를 입력해주세요." {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>상호명</FormLabel>
              <FormControl>
                <Input placeholder="사업자등록증에 기재된 상호명" {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>대표자명</FormLabel>
              <FormControl>
                <Input placeholder="사업자등록증에 기재된 대표자명" {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>대표자 생년월일 (생년월일 8자리 입력)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="예) 19900101" {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>대표자 휴대전화번호</FormLabel>
              <FormControl>
                <Input type="number" placeholder="계약서 작성을 위한 필수 사항" {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>대표자 이메일</FormLabel>
              <FormControl>
                <Input type="email" placeholder="이메일 입력" {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호 ( 영문, 숫자, 특수문자 혼합 8~15자리)</FormLabel>
              <FormControl>
                <Input type="password" placeholder="비밀번호를 입력해주세요." {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordCheck"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호 확인</FormLabel>
              <FormControl>
                <Input type="password" placeholder="비밀번호를 재입력해주세요." {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full">
          회원가입
        </Button>
      </form>
    </Form>
  );
}

export default SignUpForm;
