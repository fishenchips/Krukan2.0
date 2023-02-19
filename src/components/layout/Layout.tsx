export const Layout = (props: any) => {
  return (
    <div>
      <header>Header</header>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  );
};
