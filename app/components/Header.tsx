import { Divider, Link } from '@nextui-org/react';

const Header = () => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex justify-between px-4">
        <p className="text-xl font-bold">Why Midnight Sun</p>
        {/* <Link
          href="https://github.com/Finns841594/why_midnight_sun"
          color="foreground"
        >
          About
        </Link> */}
      </div>
      <Divider />
    </div>
  );
};

export default Header;
