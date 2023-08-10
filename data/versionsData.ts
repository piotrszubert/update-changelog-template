const data = [
	// Version 1
	{
        id: 'ver.1.0.0',
		title: "Version 1.0.0",
		releaseDate: "15-06-2022",
		bgColor: "var(--card-bg-rgb-1)",
		newFeatures: [
			// New features for version 1
			{
				short: "Introducing a powerful search functionality",
				long:
					"Introducing a powerful search functionality: We've added an advanced search feature that allows users to easily find specific items within the app. Now you can quickly locate files, contacts, and messages with just a few keystrokes.",
			},
			// Add more new features for version 1 if needed
			{
				short: "Enhanced collaboration tools",
				long:
					"Enhanced collaboration tools: Collaborate seamlessly with your team through real-time document editing and commenting. Experience a new level of productivity with improved version control and simultaneous editing capabilities.",
			},
		],
		improvements: [
			// Improvements for version 1
			{
				short: "Revamped user interface",
				long:
					"Revamped user interface: Our UI has undergone a complete makeover to enhance user experience. Enjoy a cleaner, more intuitive design that boosts productivity and reduces clutter.",
			},
			// Add more improvements for version 1 if needed
			{
				short: "Performance optimization",
				long:
					"Performance optimization: We've fine-tuned the app to run faster and smoother, minimizing lags and improving overall responsiveness.",
			},
		],
		bugFixes: [
			// Bug fixes for version 1
			{
				short: "Addressed issue with file synchronization",
				long:
					"Addressed issue with file synchronization: Users reported occasional sync errors with cloud storage. We've fixed this problem, and file synchronization now works flawlessly.",
			},
			// Add more bug fixes for version 1 if needed
			{
				short: "Resolved crashing on startup",
				long:
					"Resolved crashing on startup: Some devices experienced crashes upon launching the app. This issue has been resolved, ensuring a stable and reliable user experience.",
			},
		],
		otherUpdates: [
			// Other updates for version 1
			{
				short: "Improved localization",
				long:
					"Improved localization: The app is now available in several new languages, making it more accessible to a global audience.",
			},
			// Add more other updates for version 1 if needed
			{
				short: "Streamlined onboarding process",
				long:
					"Streamlined onboarding process: New users will find it easier to set up their accounts and start using the app thanks to an improved onboarding flow.",
			},
		],
	},
	// Version 2
	{
        id: 'ver.2.0.0',
		title: "Version 2.0.0",
		releaseDate: "01-09-2022",
		bgColor: "var(--card-bg-rgb-2)",
		newFeatures: [
			// New features for version 2
			{
				short: "Enhanced performance",
				long:
					"Enhanced performance: We've optimized the app's performance to run even smoother and faster, delivering a seamless user experience.",
			},
			// Add more new features for version 2 if needed
			{
				short: "Redesigned dashboard",
				long:
					"Redesigned dashboard: The app's main dashboard has undergone a complete redesign, providing a more intuitive and visually appealing interface.",
			},
		],
		improvements: [
			// Improvements for version 2
			{
				short: "Fixed login issues",
				long:
					"Fixed login issues: Some users experienced problems logging in. We've addressed these issues, and now you can log in without any disruptions.",
			},
			// Add more improvements for version 2 if needed
			{
				short: "Improved collaboration features",
				long:
					"Improved collaboration features: Collaborate seamlessly with your team by sharing files and documents directly from the app.",
			},
		],
		bugFixes: [
			// Bug fixes for version 2
			{
				short: "Enhanced security measures",
				long:
					"Enhanced security measures: We've strengthened the app's security protocols to safeguard your data from potential threats.",
			},
			// Add more bug fixes for version 2 if needed
			{
				short: "Fixed notification bugs",
				long:
					"Fixed notification bugs: Users reported issues with receiving notifications. These bugs have been resolved, and notifications are now working properly.",
			},
		],
		otherUpdates: [
			// Other updates for version 2
			{
				short: "Improved onboarding flow",
				long:
					"Improved onboarding flow: New users will find it easier than ever to get started with the app thanks to a streamlined onboarding process.",
			},
			// Add more other updates for version 2 if needed
			{
				short: "Enhanced user experience",
				long:
					"Enhanced user experience: We've made several user interface improvements based on user feedback to provide a more enjoyable app experience.",
			},
		],
	},
	// Version 3
	{
        id: 'ver.3.0.0',
		title: "Version 3.0.0",
		releaseDate: "18-12-2022",
		bgColor: "var(--card-bg-rgb-3)",
		newFeatures: [
			// New features for version 3
			{
				short: "Introducing dark mode",
				long:
					"Introducing dark mode: Enjoy a new dark mode option that reduces eye strain and conserves battery life, perfect for late-night usage.",
			},
			// Add more new features for version 3 if needed
			{
				short: "Improved search performance",
				long:
					"Improved search performance: Searching for files, contacts, and messages is now faster and more accurate, thanks to search algorithm enhancements.",
			},
		],
		improvements: [
			// Improvements for version 3
			{
				short: "Fixed audio playback issues",
				long:
					"Fixed audio playback issues: Some users encountered problems with audio playback. We've resolved these issues, and audio now plays without any interruptions.",
			},
			// Add more improvements for version 3 if needed
			{
				short: "Enhanced data syncing",
				long:
					"Enhanced data syncing: Sync your data across devices more efficiently and reliably, ensuring you have access to the latest updates wherever you go.",
			},
		],
		bugFixes: [
			// Bug fixes for version 3
			{
				short: "Improved app stability",
				long:
					"Improved app stability: We've addressed various bugs and stability issues, resulting in a more reliable app performance.",
			},
			// Add more bug fixes for version 3 if needed
			{
				short: "Fixed crash on search",
				long:
					"Fixed crash on search: Some users experienced crashes while using the search feature. We've fixed this issue, and search now works smoothly.",
			},
		],
		otherUpdates: [
			// Other updates for version 3
			{
				short: "Optimized battery usage",
				long:
					"Optimized battery usage: We've optimized the app's power consumption to extend battery life while using the app.",
			},
			// Add more other updates for version 3 if needed
			{
				short: "Improved error handling",
				long:
					"Improved error handling: We've enhanced the app's error messages to provide more informative and helpful guidance to users.",
			},
		],
	},
	
	// Version 4.0.0
    {
        id: 'ver.4.0.0',
        title: "Version 4.0.0",
        releaseDate: "10-03-2023",
        bgColor: "var(--card-bg-rgb-4)",
        newFeatures: [
            // New features for version 4.0.0
            {
                short: "Introducing AI-powered assistant",
                long:
                    "Introducing AI-powered assistant: Meet our new AI assistant that can help you manage tasks, set reminders, and provide personalized recommendations based on your usage patterns.",
            },
            // Add more new features for version 4.0.0 if needed
            {
                short: "Enhanced document collaboration",
                long:
                    "Enhanced document collaboration: Collaborate more effectively with your team by editing documents in real-time and tracking changes with an improved version history.",
            },
        ],
        improvements: [
            // Improvements for version 4.0.0
            {
                short: "Redesigned settings menu",
                long:
                    "Redesigned settings menu: We've revamped the settings menu for a cleaner and more organized layout, making it easier to customize your app preferences.",
            },
            // Add more improvements for version 4.0.0 if needed
            {
                short: "Optimized memory usage",
                long:
                    "Optimized memory usage: We've optimized the app's memory consumption, leading to improved performance and reduced resource usage.",
            },
        ],
        bugFixes: [
            // Bug fixes for version 4.0.0
            {
                short: "Fixed image sharing",
                long:
                    "Fixed image sharing: Users reported issues with sharing images from the app. We've resolved this problem, and image sharing now functions seamlessly.",
            },
            // Add more bug fixes for version 4.0.0 if needed
            {
                short: "Addressed notification delay",
                long:
                    "Addressed notification delay: Some users experienced delays in receiving notifications. This issue has been addressed, ensuring timely alerts.",
            },
        ],
        otherUpdates: [
            // Other updates for version 4.0.0
            {
                short: "Enhanced data privacy",
                long:
                    "Enhanced data privacy: We've implemented additional privacy measures to protect your personal information and ensure secure data handling.",
            },
            // Add more other updates for version 4.0.0 if needed
            {
                short: "Improved accessibility features",
                long:
                    "Improved accessibility features: We've made accessibility enhancements to ensure that the app is more usable and inclusive for all users.",
            },
        ],
    },

    // Version 4.1.0
    {
        id: 'ver.4.1.0',
        title: "Version 4.1.0",
        releaseDate: "25-06-2023",
        bgColor: "var(--card-bg-rgb-5)",
        newFeatures: [
            // New features for version 4.1.0
            {
                short: "Multi-device sync",
                long:
                    "Multi-device sync: Seamlessly synchronize your data across multiple devices, allowing you to switch between devices while maintaining a consistent experience.",
            },
            // Add more new features for version 4.1.0 if needed
            {
                short: "Voice commands",
                long:
                    "Voice commands: Interact with the app using voice commands for hands-free control. Perform tasks, search, and navigate with voice recognition technology.",
            },
        ],
        improvements: [
            // Improvements for version 4.1.0
            {
                short: "Redesigned note-taking",
                long:
                    "Redesigned note-taking: We've completely revamped the note-taking feature, offering more formatting options, better organization, and improved usability.",
            },
            // Add more improvements for version 4.1.0 if needed
            {
                short: "Faster image loading",
                long:
                    "Faster image loading: Images now load quicker within the app, providing a smoother browsing experience when viewing visual content.",
            },
        ],
        bugFixes: [
            // Bug fixes for version 4.1.0
            {
                short: "Resolved sync conflicts",
                long:
                    "Resolved sync conflicts: Users experienced conflicts during data synchronization. We've fixed these issues, ensuring consistent and accurate syncing.",
            },
            // Add more bug fixes for version 4.1.0 if needed
            {
                short: "Fixed crash on note export",
                long:
                    "Fixed crash on note export: Some users encountered crashes when exporting notes. This issue has been resolved, and exporting notes is now stable.",
            },
        ],
        otherUpdates: [
            // Other updates for version 4.1.0
            {
                short: "Improved offline mode",
                long:
                    "Improved offline mode: Enjoy enhanced functionality while offline, including access to recently viewed items and the ability to edit and save changes for syncing later.",
            },
            // Add more other updates for version 4.1.0 if needed
            {
                short: "Expanded keyboard shortcuts",
                long:
                    "Expanded keyboard shortcuts: We've added more keyboard shortcuts to improve navigation and streamline common tasks for power users.",
            },
        ],
    },

    // Version 4.1.1
    {
        id: 'ver.4.1.1',
        title: "Version 4.1.1",
        releaseDate: "10-08-2023",
        bgColor: "var(--card-bg-rgb-6)",
        newFeatures: [
            // New features for version 4.1.1
            {
                short: "Customizable themes",
                long:
                    "Customizable themes: Personalize your app experience with a wide range of themes and color options, allowing you to choose the look that suits you best.",
            },
            // Add more new features for version 4.1.1 if needed
            {
                short: "Quick access shortcuts",
                long:
                    "Quick access shortcuts: Easily access your favorite features and frequently used actions through customizable shortcuts for increased efficiency.",
            },
        ],
        improvements: [
            // Improvements for version 4.1.1
            {
                short: "Enhanced attachment handling",
                long:
                    "Enhanced attachment handling: Managing attachments is now smoother and more intuitive, with improved support for various file types and cloud services.",
            },
            // Add more improvements for version 4.1.1 if needed
            {
                short: "Smoother animations",
                long:
                    "Smoother animations: Enjoy smoother and more fluid animations throughout the app, enhancing the overall visual experience.",
            },
        ],
        bugFixes: [
            // Bug fixes for version 4.1.1
            {
                short: "Addressed text formatting bug",
                long:
                    "Addressed text formatting bug: Users encountered issues with text formatting inconsistencies. We've fixed this bug, ensuring consistent formatting in all instances.",
            },
            // Add more bug fixes for version 4.1.1 if needed
            {
                short: "Fixed occasional data loss",
                long:
                    "Fixed occasional data loss: Some users experienced data loss in specific scenarios. We've resolved this issue, preventing any further data loss occurrences.",
            },
        ],
        otherUpdates: [
            // Other updates for version 4.1.1
            {
                short: "Improved search suggestions",
                long:
                    "Improved search suggestions: The app now provides more accurate and contextually relevant search suggestions, helping you find what you need faster.",
            },
            // Add more other updates for version 4.1.1 if needed
            {
                short: "Updated user guides",
                long:
                    "Updated user guides: We've refreshed the user guides and documentation to provide clearer instructions and assistance for both new and existing users.",
            },
        ],
    },
	// Add more versions here if needed
];

export default data;