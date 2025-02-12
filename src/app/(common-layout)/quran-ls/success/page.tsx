import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  CheckCircle,
  Facebook,
  Info,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function QuranLSSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg">
        <CardHeader className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-green-800">
            আপনার রেজিষ্ট্রেশন সম্পন্ন হয়েছে
          </CardTitle>
          <p className="text-green-600 font-semibold">জাযাকাল্লাহু খাইর</p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-700">
              কুরআনের ভুবনে আপনাকে স্বাগতম
            </p>
            <p className="text-gray-600">
              সার্বক্ষণিক উস্তাজদের সহযোগিতা পেতে এবং সকল দিকনির্দেশনা জানতে
              আমাদের WhatsApp গ্রুপে যুক্ত হোন।
            </p>
          </div>
          <div className="md:flex justify-center gap-6 space-y-3 md:space-y-0">
            <Link
              href="https://chat.whatsapp.com/CIoA4VYQflb5bDGpbzqYoV"
              className="block"
            >
              <Button className="w-full bg-primary text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                ছেলেদের WhatsApp গ্রুপ
              </Button>
            </Link>
            <Link
              href="https://chat.whatsapp.com/JPMxi25s7XBB5ueTl4QZ4y"
              className="block"
            >
              <Button className="w-full bg-primary text-white ">
                <MessageCircle className="mr-2 h-4 w-4" />
                মেয়েদের WhatsApp গ্রুপ
              </Button>
            </Link>
          </div>
          <p className="text-gray-600 pt-3">
            আমাদের ফেইসবুক প্রাইভেট গ্রুপে যুক্ত হোন। প্রাইভেট গ্রুপে লাইভ ক্লাস
            অনুষ্ঠিত হবে। ইনশাআল্লাহ।
          </p>
          <Link
            href="https://www.facebook.com/groups/28654909407490704/?ref=share&mibextid=NSMWBT"
            className="block"
          >
            <Button className="bg-primary text-white">
              <Facebook className="mr-2 h-4 w-4" />
              ফেইসবুক প্রাইভেট গ্রুপ
            </Button>
          </Link>
        </CardContent>
        {/* <CardFooter className="text-center text-gray-500">
          <p>
            লক্ষণীয়: ক্লাস শুরু ১ম রমাদান থেকে, পরবর্তী দিকনির্দেশনা WhatsApp
            গ্রুপে জানানো হবে ইনশাআল্লাহ
          </p>
        </CardFooter> */}
        <CardFooter className="flex flex-col md:grid grid-cols-12 gap-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3  md:col-span-5">
            <Calendar className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-green-700">ক্লাস শুরু</h4>
              <p className="text-green-600">১ম রমাদান থেকে</p>
            </div>
          </div>
          <div className=" bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3  md:col-span-7">
            <Info className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-yellow-700">
              পরবর্তী দিকনির্দেশনা WhatsApp গ্রুপে জানানো হবে ইনশাআল্লাহ
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
