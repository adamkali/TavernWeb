import '../styles/globals.css';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Tavern</title>
                <meta
                    name="description"
                    content="Find Your Adventuring party"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
