interface Props {
  user: {
    name: string;

    email: string;

    type: number;
  };
}

export default function ProfileCard({
  user,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow
        p-8
        max-w-2xl
        mx-auto
      "
    >
      <div className="flex flex-col items-center text-center">
        <div
          className="
            w-28
            h-28
            rounded-full
            bg-black
            text-white
            flex
            items-center
            justify-center
            text-4xl
            font-bold
            mb-6
          "
        >
          {user.name
            .charAt(0)
            .toUpperCase()}
        </div>

        <h1 className="text-3xl font-bold mb-2">
          {user.name}
        </h1>

        <p className="text-gray-500 mb-6 break-all">
          {user.email}
        </p>

        <span
          className={`
            px-4 py-2 rounded-full text-sm font-medium
            ${
              user.type === 1
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }
          `}
        >
          {user.type === 1
            ? "Business"
            : "Person"}
        </span>
      </div>
    </div>
  );
}