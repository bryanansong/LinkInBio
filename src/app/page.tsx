import ProfileLink from "@/components/ProfileLink";
import ProfileSection from "@/components/ProfileSection";

export default function Home() {
	const profilePicUrl = process.env.PROFILE_IMAGE_URL || "/next.svg";
	const profileDetails = {
		name: process.env.PROFILE_NAME || "..no name..",
		tag: process.env.PROFILE_TAG || "..no tag..",
		bio: process.env.PROFILE_BIO || "..no bio..",
	};

	const profileLinks = [
		{ title: "Instagram", url: process.env.INSTAGRAM_URL || "..no instagram.." },
		{ title: "TikTok", url: process.env.TIKTOK_URL || "..no tiktok.." },
		{ title: "LinkedIn", url: process.env.LINKEDIN_URL || "..no linkedin.." },
		{ title: "GitHub", url: process.env.GITHUB_URL || "..no github.." },
	];

	return (
		<main className="flex min-h-svh mt-5 flex-col justify-start items-center w-[390px]">
			<div className="w-full flex">
				<h1 className="flex flex-1 w-full font-ultra text-end text-[32px] pb-8 ml-2">
					Welcome
				</h1>
				<div className="flex flex-1" />
			</div>
			<ProfileSection
				profilePicUrl={profilePicUrl}
				profileDetails={profileDetails}
			/>
			{profileLinks.map((link) => (
				<ProfileLink
					key={link.title}
					link={link}
				/>
			))}
		</main>
	);
}
