import { Button } from "@/components/ui/button";
import { BookOpenIcon, HomeIcon } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      {/* <Image
        src="https://freefrontend.com/assets/img/html-css-404-page-templates/Pure-CSS-404-Error-Page.gif"
        width={1000}
        height={500}
        alt="not found page"
        className="w-full"
      /> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-primary mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          صفحة غير موجودة
        </h2>

        <p className="text-gray-600 max-w-md mb-8">
          We&apos;re sorry, the page you&apos;re looking for doesn&apos;t exist
          or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/">
              <HomeIcon className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/courses">
              <BookOpenIcon className="mr-2 h-4 w-4" />
              Browse Courses
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
