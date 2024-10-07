import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props {
  name: string;
  image: string;
  positions: string;
}

const TeamMemberCard = ({ name, image, positions }: Props) => {
  return (
    <Card className=" !bg-transparent !border-primary/35 hover:shadow-lg hover:-translate-y-2 duration-300 ease-out rounded-none shadow-none ">
      <CardHeader className="flex flex-col items-center justify-center gap-[21px]">
        <Image
          width={100}
          height={100}
          src={`/assets/${image}`}
          alt="team member profile picture"
          className="object-contain rounded-md blur-sm"
        />
        <CardTitle className="text-center text-xl font-semibold text-secondary">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[15px] text-center text-secondary">{positions}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-4 items-center">
        <Link href="#" className="">
          <LinkedinIcon className="text-primary" size={20} />
        </Link>
        <Link href="#">
          <InstagramLogoIcon className="text-primary" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TeamMemberCard;
