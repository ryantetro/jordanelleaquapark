import { MainLayout } from '../layouts/MainLayout'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="min-h-screen w-full bg-white">
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 px-4 bg-gradient-to-br from-[#F1FAFF] via-white to-[#E0F7FF]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-extrabold text-[28px] md:text-[36px] text-[#013A63] mb-4">
              Get in Touch
            </h1>
            <p className="font-open-sans text-[16px] md:text-[18px] text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
              Have questions about your Jordanelle Aqua Park adventure? We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            {/* Main Contact Section */}
            <div className="max-w-xl mx-auto">
              {/* Contact Info */}
              <div className="bg-white border border-[#E1E8ED] rounded-xl p-6 shadow-sm">
                <h3 className="font-poppins font-bold text-[20px] text-[#013A63] mb-6 text-center">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#3A6BAA]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#3A6BAA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#013A63] mb-1 text-[14px]">Location</h4>
                      <p className="text-[#4A5568] text-[13px] leading-relaxed">
                        Jordanelle Aqua Park<br />
                        515 UT-319, Heber City, UT 84032
                      </p>
                      <a href="https://goo.gl/maps/2Qw2v8Qw2v82" target="_blank" rel="noopener noreferrer" className="text-[#3A6BAA] font-medium hover:underline text-[12px] mt-1 inline-block">
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#F7C873]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#F7C873]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#013A63] mb-1 text-[14px]">Hours</h4>
                      <p className="text-[#4A5568] text-[13px] leading-relaxed">
                        June–September<br />
                        Daily 10:00 AM – 6:00 PM
                      </p>
                      <p className="text-[#6CA6D9] text-[11px] mt-1">Hourly sessions, last entry 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#00C896]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#00C896]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#013A63] mb-1 text-[14px]">Phone</h4>
                      <a href="tel:14356157397" className="text-[#4A5568] hover:text-[#00C896] transition-colors font-medium text-[13px]">
                        (435) 615-7397
                      </a>
                      <p className="text-[#6CA6D9] text-[11px] mt-1">Call for quick help</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#F7C873]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#F7C873]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#013A63] mb-1 text-[14px]">Email</h4>
                      <a href="mailto:info@jordanelleaquapark.com" className="text-[#4A5568] hover:text-[#F7C873] transition-colors font-medium text-[13px]">
                        info@jordanelleaquapark.com
                      </a>
                      <p className="text-[#6CA6D9] text-[11px] mt-1">Replies within 24–48 hours</p>
                    </div>
                  </div>
                </div>

                {/* Quick Tips */}
                {/* <div className="mt-8 pt-6 border-t border-[#E1E8ED]">
                  <h4 className="font-poppins font-semibold text-[#013A63] mb-3">Quick Tips</h4>
                  <ul className="space-y-2 text-sm text-[#4A5568]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></span>
                      <span>For immediate assistance, call us</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Group bookings require advance notice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></span>
                      <span>Weather updates posted on our social media</span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}