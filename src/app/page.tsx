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
		{ title: "Twitter", url: process.env.TWITTER_URL || "..no twitter.." },
	];

	return (
		<main className="flex min-h-screen flex-col justify-center items-center w-[390px]">
			<h1 className="w-full font-ultra text-start text-[32px] pb-8">
				Welcome
			</h1>
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
