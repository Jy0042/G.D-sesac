interface Props {
  name: string;
  age?: number;
}

// export default function PropsTypes({ name, age }: Props) {
//   return (
//     <>
//       <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
//       <div>name: {name}</div>
//       <div>age: {age}</div>
//     </>
//   );
// }

export default function PropsTypes(props: Props) {
  const { name, age }:Props = props

  return (
    <>
      <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
      <div>name: {name}</div>
      {age && <div>age: {age}</div>}
    </>
  );
}