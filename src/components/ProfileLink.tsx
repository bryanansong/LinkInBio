"use client";

type ProfileLinkProps = {
	link: {
		title: string;
		url: string;
	};
};

const ProfileLink: React.FC<ProfileLinkProps> = ({ link }) => {
	const onClick = () => {
		window.open(link.url, "_blank");
	};
	return (
		<button
			onClick={onClick}
			className=" h-[60px] w-[320px] mb-[30px] rounded-3xl font-ubuntu text-black text-2xl
                 bg-gradient-to-r from-[#FFDA66] via-[#FFDA66] via-77% to-[#F8AD52]"
		>
			{link.title}
		</button>
	);
};

export default ProfileLink;
