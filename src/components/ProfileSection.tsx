import Image from "next/image";
import React from "react";

type ProfileSectionProps = {
	profilePicUrl: string;
	profileDetails: {
		name: string;
		tag: string;
		bio: string;
	};
};

const ProfileSection: React.FC<ProfileSectionProps> = ({
	profilePicUrl,
	profileDetails,
}) => {
	return (
		<div className="flex items-center w-full pb-11">
			<div className="flex flex-1 justify-center items-center">
				<Image
					src={profilePicUrl}
					alt="Picture of the author"
					width={120}
					height={120}
					className="rounded-full"
				/>
			</div>
			<div className="flex-col flex-1 justify-between">
				<h2 className="text-2xl font-ubuntu">{profileDetails.name}</h2>
				<p className="font-ubuntu text-gray-500">@{profileDetails.tag}</p>
				<p className="font-ubuntu text-gray-500 text-sm max-w-40">
					{profileDetails.bio}
				</p>
			</div>
		</div>
	);
};

export default ProfileSection;
