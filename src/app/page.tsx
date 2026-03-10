"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import TextAbout from "@/components/sections/about/TextAbout";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import VirtualTryOnUpload from "@/components/virtualTryOn/VirtualTryOnUpload";
import VirtualTryOnPreview from "@/components/virtualTryOn/VirtualTryOnPreview";
import { Clock, Package, Sparkles, Target, Zap } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [clothesPhoto, setClothesPhoto] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleUserPhotoUpload = (photo: string) => {
    setUserPhoto(photo);
  };

  const handleClothesPhotoUpload = (photo: string) => {
    setClothesPhoto(photo);
  };

  const handleStartTryOn = () => {
    if (userPhoto && clothesPhoto) {
      setShowPreview(true);
    }
  };

  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumLargeSizeMediumTitles"
      background="fluid"
      cardStyle="subtle-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Features", id: "features" },
            { name: "How It Works", id: "about" },
            { name: "Try-On", id: "tryon" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Try Now", href: "tryon" }}
          brandName="VirtualTryOn"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="VIRTUAL TRY ON"
          description="Upload your photo and clothes to instantly see how outfits look on you. No more guessing – visualize your style in seconds with AI-powered virtual fitting."
          buttons={[
            { text: "Start Try-On", href: "tryon" },
            { text: "Learn More", href: "about" },
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkdZCEKcsvSa3zMiBDupiHXQnd/a-modern-clean-interface-showing-a-perso-1773140923936-4fd9a2ad.png",              imageAlt: "Virtual try-on demonstration with user wearing tried-on clothes"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkdZCEKcsvSa3zMiBDupiHXQnd/a-fashion-model-in-professional-studio-s-1773140924846-ede690c0.png",              imageAlt: "Fashion model trying on different outfits virtually"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkdZCEKcsvSa3zMiBDupiHXQnd/user-interface-showing-real-time-virtual-1773140923840-8d6f0322.png",              imageAlt: "User interface showing virtual clothing fitting on person"},
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          features={[
            {
              id: 1,
              title: "Upload Your Photo",              description: "Take a clear full-body photo or upload from your gallery. Our AI analyzes your body measurements and proportions automatically.",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkdZCEKcsvSa3zMiBDupiHXQnd/smartphone-screen-showing-photo-upload-i-1773140923728-8a57dab7.png",                imageAlt: "Upload Your Photo - Phone 1"},
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkdZCEKcsvSa3zMiBDupiHXQnd/smartphone-screen-showing-successful-pho-1773140924340-d914f40c.png",                imageAlt: "Upload Your Photo - Phone 2"},
            },
            {
              id: 2,
              title: "Select Your Clothes",              description: "Browse from our extensive catalog or upload images of clothes you own. Choose sizes and colors to customize your selection.",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkdZCEKcsvSa3zMiBDupiHXQnd/smartphone-displaying-clothing-catalog-i-1773140924524-ff3ad0c2.png",                imageAlt: "Select Your Clothes - Phone 1"},
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkdZCEKcsvSa3zMiBDupiHXQnd/smartphone-screen-showing-selected-cloth-1773140924624-dbbb7667.png",                imageAlt: "Select Your Clothes - Phone 2"},
            },
            {
              id: 3,
              title: "See How It Looks",              description: "Watch in real-time as our AI technology drapes the clothing onto your body. Get instant visual feedback before making purchase decisions.",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkdZCEKcsvSa3zMiBDupiHXQnd/smartphone-showing-real-time-virtual-try-1773140924250-6c935ace.png",                imageAlt: "See How It Looks - Phone 1"},
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkdZCEKcsvSa3zMiBDupiHXQnd/smartphone-interface-showing-side-by-sid-1773140924110-0eadfeb0.jpg",                imageAlt: "See How It Looks - Phone 2"},
            },
          ]}
          showStepNumbers={true}
          title="Experience Virtual Fitting"
          description="Seamlessly try clothes in three simple steps"
          tag="Features"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="How It Works"
          title="Revolutionary AI-Powered Virtual Fitting Technology. Say goodbye to sizing anxiety and hello to confident shopping."
          useInvertedBackground={true}
          buttons={[
            { text: "Get Started Free", href: "tryon" },
            { text: "View Demo", href: "features" },
          ]}
        />
      </div>

      <div id="tryon" data-section="tryon">
        <div className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-background/50">
          <div className="max-w-6xl mx-auto">
            {!showPreview ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <VirtualTryOnUpload
                  title="Upload Your Photo"
                  description="Select a clear full-body photo for accurate measurements"
                  onPhotoUpload={handleUserPhotoUpload}
                  uploadType="user"
                />
                <VirtualTryOnUpload
                  title="Upload Clothing Photo"
                  description="Choose the clothes you want to try on"
                  onPhotoUpload={handleClothesPhotoUpload}
                  uploadType="clothes"
                />
              </div>
            ) : (
              <VirtualTryOnPreview
                userPhoto={userPhoto}
                clothesPhoto={clothesPhoto}
                onBack={() => setShowPreview(false)}
              />
            )}
          </div>
        </div>
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          metrics={[
            {
              id: "1",              value: "2.5M",              title: "Virtual Try-Ons",              description: "Completed successfully with 98% satisfaction",              icon: Zap,
            },
            {
              id: "2",              value: "94%",              title: "Accuracy Rate",              description: "AI-powered body mapping and fit prediction",              icon: Target,
            },
            {
              id: "3",              value: "50+",              title: "Fashion Brands",              description: "Integrated with top retailers worldwide",              icon: Package,
            },
            {
              id: "4",              value: "30s",              title: "Average Try-On",              description: "From upload to instant visualization",              icon: Clock,
            },
          ]}
          title="Trusted by Fashion Enthusiasts"
          description="Join millions of users transforming their shopping experience"
          tag="Our Impact"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: "1",              title: "How accurate is the virtual try-on?",              content: "Our AI technology uses advanced computer vision and machine learning to achieve 94% accuracy in fit prediction. We analyze 50+ body points and fabric properties to ensure realistic visualization. Results vary based on photo quality and clothing specifications."},
            {
              id: "2",              title: "What data do you collect from my photos?",              content: "We analyze body measurements and proportions but do not store your original photos permanently. Data is processed securely and deleted after 30 days unless you choose to save your profile. You have full control over your privacy settings."},
            {
              id: "3",              title: "Can I use this for online shopping?",              content: "Yes! Many retailers integrate with our platform. You can see exactly how clothes will fit before purchasing, significantly reducing return rates and improving shopping confidence."},
            {
              id: "4",              title: "Which devices are supported?",              content: "Our platform works on all modern devices including smartphones, tablets, and desktop computers. We recommend good lighting and a clear full-body view for best results."},
            {
              id: "5",              title: "Is there a subscription fee?",              content: "Basic virtual try-on is completely free. Premium features like advanced body mapping and brand partnerships are available through optional premium tiers starting at $4.99/month."},
            {
              id: "6",              title: "How do I get accurate measurements?",              content: "Our AI automatically detects body proportions from your photo. For the most accurate results, wear fitted clothing, stand in good lighting, and ensure your entire body is visible in the frame."},
          ]}
          title="Frequently Asked Questions"
          description="Everything you need to know about virtual try-on technology"
          tag="Help & Support"
          textboxLayout="default"
          animationType="smooth"
          faqsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          faqs={[
            {
              id: "1",              title: "Do I need to create an account?",              content: "No account is required for basic try-ons. Create a free account to save your profile, preferences, and try-on history for a personalized experience."},
            {
              id: "2",              title: "Can I share my virtual try-ons?",              content: "Yes! Share try-on results directly with friends via social media, email, or link. Get real-time feedback before making purchase decisions."},
            {
              id: "3",              title: "What about different body types?",              content: "Our AI is trained on diverse body types and sizes. We support measurements from XS to XXXL and continuously improve accuracy across all body shapes."},
          ]}
          ctaTitle="Ready to Transform Your Shopping?"
          ctaDescription="Start your virtual try-on journey today. Get instant access to our AI-powered fitting technology."
          ctaButton={{ text: "Launch App", href: "tryon" }}
          ctaIcon={Sparkles}
          animationType="slide-up"
          accordionAnimationType="smooth"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "features" },
                { label: "How It Works", href: "about" },
                { label: "Try-On", href: "tryon" },
                { label: "Blog", href: "#" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
                { label: "Contact", href: "contact" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Security", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 VirtualTryOn | Transforming Fashion Technology"
        />
      </div>
    </ThemeProvider>
  );
}