import {
  ListBulletIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

interface Props {
  cardView: boolean;
  setCardView: (cardView: boolean) => void;
}

export default function Toggle({ cardView, setCardView }: Props) {
  return (
    <label className="swap swap-rotate text-black-gray">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        onClick={() => {
          setCardView(!cardView);
        }}
      />

      {/* hamburger icon */}
      <ListBulletIcon className="swap-on h-8 w-8 xl:h-10 xl:w-10" />
      <RectangleStackIcon className="swap-off h-8 w-8 xl:h-10 xl:w-10" />
    </label>
  );
}
