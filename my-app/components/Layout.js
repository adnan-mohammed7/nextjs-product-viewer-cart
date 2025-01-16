import Link from 'next/link';
import { useAtom } from 'jotai';
import { cartListAtom } from '@/store';

export default function Layout(props) {
  const [cartList, setCartList] = useAtom(cartListAtom)
  return (
    <>
      <h1>Navigation</h1>
      <Link href="/">Main</Link> | <Link href="/about">About</Link> | <Link href="/home">Home</Link> | <Link href="/products">All Products</Link> | <Link href="/cart">Shopping Cart ({cartList.length})</Link>
      <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}