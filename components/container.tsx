export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-4 md:px-[100px] pt-[70px] pb-[100px]">{children}</main>
  );
}
