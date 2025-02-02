export default function FooterItem({ item }) {
  return (
    <li key={item} className="text-lg font-normal list-disc cursor-pointer hover:underline hover:text-light-green">
      {item}
    </li>
  );
}
