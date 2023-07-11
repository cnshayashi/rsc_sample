import Link from "next/link";
import { css } from "../styled-system/css";

export default function Home() {
  const styles = css({
    margin: "10px",
    fontSize: "30px",
    fontWeight: "bold"
  });

  return (
    <>
      <div className={styles}>
        Hello 🐼!
      </div>
      <p>
        ・Context
        <MyLink href="/context">sample</MyLink>
      </p>
      <p>
        ・Recoil
        <MyLink href="/recoil">sample</MyLink>
      </p>
      <p>
        ・Metadata
        <MyLink href="/metadata/server">server</MyLink>
        <MyLink href="/metadata/client">client</MyLink>
      </p>
      <p>
        ・Practice
        <MyLink href="/practice/bad">bad</MyLink>
        <MyLink href="/practice/composition">composition</MyLink>
      </p>
    </>
  );
}

function MyLink({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <Link
      className={css({
        marginLeft: "20px",
        color: "blue",
        _hover: {
          cursor: "pointer",
        }
      })}
      href={href}
    >
      {children}
    </Link>
  )
}
