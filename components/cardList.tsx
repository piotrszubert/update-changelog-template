import Card from "./card";

const data = [
    // Version 1
    {
      title: "Version 1.0.0",
      releaseDate: "15-06-2022",
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
      title: "Version 2.0.0",
      releaseDate: "01-09-2022",
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
      title: "Version 3.0.0",
      releaseDate: "18-12-2022",
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
    // Add more versions here if needed
  ];


export default function CardList() {
    return(
        <div>
            {data.reverse().map((item, index) => (
                <Card
                    title={item.title}

                />
            ))}
        </div>
    );
}