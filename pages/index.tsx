import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>

        <ul>
          <li>
            <Link href="/products/smartphone">
              <a>スマートフォン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/pc">
              <a>パソコン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/headphone">
              <a>ヘッドフォン</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
