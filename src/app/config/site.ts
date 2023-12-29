export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Radio Ads",
	description: "Booking Radio ads online",
	navItems: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "About",
                href: "/about",
            },
            {
                label: "Contact",
                href: "/contact",
            }
        ],
	navMenuItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/about",
        },
        {
            label: "Contact",
            href: "/contact",
        }
		// {
		// 	label: "Profile",
		// 	href: "/profile",
		// },
		// {
		// 	label: "Dashboard",
		// 	href: "/dashboard",
		// },
		// {
		// 	label: "Projects",
		// 	href: "/projects",
		// },
		// {
		// 	label: "Team",
		// 	href: "/team",
		// },
		// {
		// 	label: "Calendar",
		// 	href: "/calendar",
		// },
		// {
		// 	label: "Settings",
		// 	href: "/settings",
		// },
		// {
		// 	label: "Help & Feedback",
		// 	href: "/help-feedback",
		// },
		// {
		// 	label: "Logout",
		// 	href: "/logout",
		// },
	],
	links: {
		github: "https://github.com/nrdout",
		twitter: "https://twitter.com/nrdout",
		docs: "https://github.com/nrdout",
		discord: "https://github.com/nrdout",
        sponsor: "https://github.com/nrdout"
	},
};