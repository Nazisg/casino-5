export default function PrivacyPolicy() {
    return (
        <section className="px-4 py-5 lg:py-10">
            <div className="max-w-6xl mx-auto flex flex-col">
                <h2 className="text-[24px] lg:text-[48px] font-bold glow-text text-center mb-3 lg:mb-5">
                    Privacy Policy
                </h2>
                <p className=" text-base lg:text-xl text-black leading-relaxed ">
                    Your privacy is not just important to us — it’s fundamental to how we
                    operate. At Casino, we believe that transparency about
                    data collection and use is essential for building trust with our readers.
                    This policy explains exactly what information we collect, why we collect it,
                    and how we protect it.
                </p>

                {/* 1. Data Controller */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">1. Data Controller Information</h2>
                    <p className="text-white text-sm">
                        Casino (“we,” “our,” or “us”) operates as an independent casino review website. 
                        We respect your privacy and are committed to protecting your personal data in accordance with the UK GDPR and the Data Protection Act 2018.
                    </p>
                </div>

                {/* 2. Information We Collect */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">2. Information We Collect</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-green-300 mb-3">Information You Provide</h3>
                            <ul className="space-y-2 text-green-300 text-sm">
                                <li>• Email address (for newsletter subscriptions)</li>
                                <li>• Name (if given in contact forms)</li>
                                <li>• Message content</li>
                                <li>• Communication preferences</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-green-300 mb-3">Automatically Collected</h3>
                            <ul className="space-y-2 text-green-300 text-sm">
                                <li>• IP address & location</li>
                                <li>• Browser & device type</li>
                                <li>• Referring website</li>
                                <li>• Analytics data (pages viewed, clicks, etc.)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. How We Use Your Info */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">3. How We Use Your Information</h2>
                    <ul className="space-y-2 text-white text-sm">
                        <li>• Provide and maintain our services</li>
                        <li>• Send newsletters and updates (with consent)</li>
                        <li>• Personalize your experience</li>
                        <li>• Improve site functionality and content</li>
                        <li>• Protect against fraud and security threats</li>
                        <li>• Comply with legal obligations</li>
                    </ul>
                </div>

                {/* 4. Cookies */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">4. Cookies & Tracking</h2>
                    <ul className="space-y-2 text-white text-sm">
                        <li>• Essential cookies (security, login, forms)</li>
                        <li>• Analytics cookies (Google Analytics)</li>
                        <li>• Preference cookies (language, theme)</li>
                        <li>• Performance cookies (speed & error logs)</li>
                    </ul>
                </div>

                {/* 5. Data Sharing */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">5. Data Sharing & Third Parties</h2>
                    <ul className="space-y-2 text-white text-sm">
                        <li>• We do not sell your data</li>
                        <li>• Trusted providers: hosting, email, analytics</li>
                        <li>• Legal compliance when required</li>
                        <li>• Security & fraud prevention measures</li>
                    </ul>
                </div>

                {/* 6. Data Security */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">6. Data Security</h2>
                    <ul className="space-y-2 text-white text-sm">
                        <li>• SSL/TLS encryption</li>
                        <li>• Secure hosting</li>
                        <li>• Access controls</li>
                        <li>• Regular security audits</li>
                    </ul>
                </div>

                {/* 7. Your Rights */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">7. Your Privacy Rights</h2>
                    <ul className="space-y-2 text-white text-sm">
                        <li>• Access and request a copy of your data</li>
                        <li>• Correct or delete your data</li>
                        <li>• Withdraw consent</li>
                        <li>• Object to certain processing</li>
                        <li>• File complaints with authorities</li>
                    </ul>
                </div>

                {/* 8. Data Retention */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">8. Data Retention</h2>
                    <ul className="space-y-2 text-white text-sm">
                        <li>• Newsletters: until you unsubscribe</li>
                        <li>• Contact forms: 2 years</li>
                        <li>• Analytics: 26 months</li>
                        <li>• Security logs: 1 year</li>
                    </ul>
                </div>

                {/* 9. International Transfers */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">9. International Data Transfers</h2>
                    <ul className="space-y-2 text-white text-sm">
                        <li>• Adequacy decisions (UK/EU compliant)</li>
                        <li>• Standard Contractual Clauses (SCCs)</li>
                        <li>• Certified secure providers</li>
                    </ul>
                </div>

                {/* 10. Contact */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">10. Contact Information</h2>
                    <ul className="space-y-2 text-white text-sm">
                        <li>Email: <a href="mailto:privacy@Casino.com" className="text-green-400">privacy@Casino.com</a></li>
                        <li>General: <a href="mailto:info@Casino.com" className="text-green-400">info@Casino.com</a></li>
                        <li>Postal: Data Protection Officer, Casino, London, UK</li>
                    </ul>
                </div>

                {/* 11. Updates */}
                <div className="bg-[#300832] border mt-5 border-green-500/30 rounded-xl p-4 lg:p-8">
                    <h2 className="lg:text-2xl text-xl font-bold text-white lg:mb-6 mb-3">11. Updates to This Policy</h2>
                    <p className="text-white text-sm">
                        We may update this Privacy Policy occasionally to reflect changes in laws, services, or practices. 
                        We encourage you to review it periodically. Significant changes will be announced on our website or via email if subscribed.
                    </p>
                </div>
            </div>
        </section>
    );
}
