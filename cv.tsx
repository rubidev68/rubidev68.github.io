// cv.tsx
"use client"

import { Mail, Phone, MapPin, Car, Linkedin, Briefcase, GraduationCap, Heart, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { AnimatedCard } from "@/components/animated-card"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import cn from "classnames"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import en from "./locales/en.json"
import fr from "./locales/fr.json"
import de from "./locales/de.json"
import { LanguageSwitcher } from "@/app/language"

type CardDetails = {
  title: string
  content: React.ReactNode
}



export default function CV() {
  const router = useRouter()
  const pathname = usePathname()
  const t = pathname?.startsWith('/fr') ? fr : pathname?.startsWith('/de') ? de : en

  const { ref: profileRef, inView: profileInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isOpen, setIsOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState<CardDetails | null>(null)

  const showDetails = (details: CardDetails) => {
    setSelectedCard(details)
    setIsOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#ffffff] p-6 md:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl grid md:grid-cols-[320px_1fr] gap-8">
        {/* Left Sidebar */}
        <aside className="space-y-8">
          {/* Profile */}
          <div
            ref={profileRef}
            className={cn(
              "text-center md:text-left transition-all duration-500",
              "opacity-0 translate-y-4",
              profileInView && "opacity-100 translate-y-0"
            )}
          >
            <div className="mb-4 relative w-24 h-24 mx-auto md:mx-0">
              <Image
                src="/moi.png"
                alt="Profile picture"
                className="rounded-full"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-2xl font-bold text-[#2e2e48] mb-1">Anatole CONRAD</h1>
            <div className="space-y-1">
              <h2 className="text-[#ffcc00] font-semibold">Student Entrepreneur</h2>
              <h2 className="text-[#ffcc00] font-semibold">Engineering Student</h2>
            </div>
          </div>

          {/* Quote */}
          <Card className="p-4 bg-gray-50">
            <blockquote className="text-[#79819a]">
              <p className="mb-2">&ldquo;Intelligence is the ability to adapt to change.&rdquo;</p>
              <footer className="text-sm">Stephen Hawking</footer>
            </blockquote>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#79819a]" />
              <a href="mailto:anatole.conrad68@gmail.com" className="text-[#2e2e48] hover:underline" target="blank">
                anatole.conrad68@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#79819a]" />
              <span className="text-[#2e2e48]">+33 7 83 00 30 27</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#79819a]" />
              <div>
                <p className="text-[#2e2e48]">33 place reine Mathilde</p>
                <p className="text-[#2e2e48]">F-14000 CAEN</p>
                <p className="text-[#2e2e48]">FRANCE</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Car className="w-5 h-5 text-[#79819a]" />
              <span className="text-[#2e2e48]">Driver's Licence: Category B</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-[#79819a]" />
              <a href="https://www.linkedin.com/in/anatole-conrad/" className="text-[#2e2e48] hover:underline" target="blank">
                anatole-conrad
              </a>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#2e2e48]">{t.languages.title}</h3>
            <div className="space-y-2">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/fr')}>
                  <span className="text-xl">🇫🇷</span>
                  <div>
                  <p className="text-[#2e2e48]">{t.languages.items.french.title}</p>
                  <p className="text-[#79819a] text-sm">{t.languages.items.french.subtitle}</p>
                  </div>
                </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
                <span className="text-xl">🇬🇧</span>
                <div>
                  <p className="text-[#2e2e48]">{t.languages.items.english.title}</p>
                  <p className="text-[#79819a] text-sm">{t.languages.items.english.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/de')}>
                <span className="text-xl">🇩🇪</span>
                <div>
                  <p className="text-[#2e2e48]">{t.languages.items.german.title}</p>
                  <p className="text-[#79819a] text-sm">{t.languages.items.german.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#2e2e48]">{t.skills.programming.title}</h3>
            <p className="text-[#79819a]">{t.skills.programming.description}</p>

            <h3 className="font-semibold text-[#2e2e48]">{t.skills.technical.title}</h3>
            <p className="text-[#79819a]">{t.skills.technical.description}</p>

            <h3 className="font-semibold text-[#2e2e48]">{t.skills.digitalSkills.title}</h3>
            <p className="text-[#79819a]">{t.skills.digitalSkills.description}</p>

            <h3 className="font-semibold text-[#2e2e48]">{t.skills.music.title}</h3>
            <p className="text-[#79819a]">{t.skills.music.description}</p>

            <h3 className="font-semibold text-[#2e2e48]">{t.skills.sports.title}</h3>
            <p className="text-[#79819a]">{t.skills.sports.description}</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Introduction */}
          <div className="mb-6"></div>
          <p className="text-[#2e2e48] text-lg leading-relaxed">
            {t.introduction}
          </p>

          {/* Experience Section */}
          <section>
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <Briefcase className="w-6 h-6 text-[#ffcc00]" />
              <h2 className="text-xl font-bold text-[#2e2e48]">{t.experience.title}</h2>
            </div>
            <div className="space-y-6">
              <AnimatedCard category="experience" logo="/doliam.png" delay={100} className="cursor-pointer"
                onClick={() => showDetails({
                  title: t.experience.itIntern.title,
                  content: (
                    <div className="space-y-4">
                      <div className="relative" style={{ overflow: 'hidden' }}>
                      <iframe 
                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7233450535423545344" 
                        height="500" 
                        width="100%" 
                        frameborder="0" 
                        allowfullscreen="" 
                        title="Post intégré"
                        style={{ overflow: 'hidden', width: 'calc(100% + 17px)', marginRight: '-17px' }}
                      ></iframe>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"/>
                      </div>
                    </div>
                  )
                })}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.experience.itIntern.title}</h3>
                    {t.experience.itIntern.descriptions.map((desc, idx) => (
                      <p key={idx} className="text-[#79819a]">{desc}</p>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[#79819a]">{t.experience.itIntern.period}</p>
                    <p className="text-[#79819a]">{t.experience.itIntern.company}</p>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard category="experience" logo="/awake.png" delay={100} className="cursor-pointer"
                onClick={() => showDetails({
                  title: t.experience.awakeChallenge.title,
                  content: (
                    <div className="space-y-4">
                      <div className="relative" style={{ overflow: 'hidden' }}>
                      <iframe 
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7216830249018277892"
                        height="500" 
                        width="100%" 
                        frameborder="0" 
                        allowfullscreen="" 
                        title="Post intégré"
                        style={{ overflow: 'hidden', width: 'calc(100% + 17px)', marginRight: '-17px' }}
                      ></iframe>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"/>
                      </div>
                    </div>
                  )
                })}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.experience.awakeChallenge.title}</h3>
                    {t.experience.awakeChallenge.descriptions.map((desc, idx) => (
                      <p key={idx} className="text-[#79819a]">{desc}</p>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[#79819a]">{t.experience.awakeChallenge.period}</p>
                    <p className="text-[#79819a]">{t.experience.awakeChallenge.company}</p>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard category="experience" logo="/acadomia.png" delay={100}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.experience.tutor.title}</h3>
                    <p className="text-[#79819a]">{t.experience.tutor.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#79819a]">{t.experience.tutor.period}</p>
                    <p className="text-[#79819a]">{t.experience.tutor.company}</p>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard category="experience" logo="/commerstras.png" delay={100} className="cursor-pointer"
                onClick={() => showDetails({
                  title: t.experience.appDev.title,
                  content: (
                    <div className="space-y-4">
                      <div className="relative" style={{ overflow: 'hidden' }}>
                      <iframe 
                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7097568523228438529"
                        height="500" 
                        width="100%" 
                        frameborder="0" 
                        allowfullscreen="" 
                        title="Post intégré"
                        style={{ overflow: 'hidden', width: 'calc(100% + 17px)', marginRight: '-17px' }}
                      ></iframe>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"/>
                      </div>
                    </div>
                  )
                })}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.experience.appDev.title}</h3>
                    {t.experience.appDev.descriptions.map((desc, idx) => (
                      <p key={idx} className="text-[#79819a]">{desc}</p>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[#79819a]">{t.experience.appDev.period}</p>
                    <p className="text-[#79819a]">{t.experience.appDev.company}</p>
                    <a href="https://www.commerstras.com/" className="text-[#79819a] hover:underline" target="blank">
                      {t.experience.appDev.website}
                    </a>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard category="experience" logo="/legoland.png" delay={100}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.experience.seasonal.title}</h3>
                    {t.experience.seasonal.descriptions.map((desc, idx) => (
                      <p key={idx} className="text-[#79819a]">{desc}</p>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[#79819a]">{t.experience.seasonal.period}</p>
                    <p className="text-[#79819a]">{t.experience.seasonal.company}</p>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard category="experience" logo="/gluciaide.png" delay={100}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.experience.gluciAide.title}</h3>
                    {t.experience.gluciAide.descriptions.map((desc, idx) => (
                      <p key={idx} className="text-[#79819a]">{desc}</p>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[#79819a]">{t.experience.gluciAide.period}</p>
                    <a href="https://www.gluciaide.com/" className="text-[#79819a] hover:underline" target="blank">
                      {t.experience.gluciAide.website}
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </section>

          {/* Formation Section */}
          <section>
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <GraduationCap className="w-6 h-6 text-[#ffcc00]" />
              <h2 className="text-xl font-bold text-[#2e2e48]">{t.formation.title}</h2>
            </div>
            <div className="space-y-6">
              <AnimatedCard category="education" logo="/ensicaen.png" delay={100}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.formation.meng.title}</h3>
                    <p className="text-[#79819a]">{t.formation.meng.institution}</p>
                    {t.formation.meng.descriptions.map((desc, idx) => (
                      <p key={idx} className="text-[#79819a]">{desc}</p>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[#79819a]">{t.formation.meng.period}</p>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard category="education" logo="/kleber.png" delay={100}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.formation.kleber.title}</h3>
                    {t.formation.kleber.descriptions.map((desc, idx) => (
                      <p key={idx} className="text-[#79819a]">{desc}</p>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[#79819a]">{t.formation.kleber.period}</p>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard category="education" logo="/armand.png" delay={100}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.formation.louisArmand.title}</h3>
                    <p className="text-[#79819a]">{t.formation.louisArmand.subtitle}</p>
                    {t.formation.louisArmand.descriptions.map((desc, idx) => (
                      <p key={idx} className="text-[#79819a]">{desc}</p>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[#79819a]">{t.formation.louisArmand.period}</p>
                  </div>
                </div>
              </AnimatedCard>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AnimatedCard category="education" delay={100}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[#2e2e48]">{t.formation.pepiteNormandie.title}</h3>
                      <p className="text-[#79819a]">{t.formation.pepiteNormandie.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#79819a]">{t.formation.pepiteNormandie.period}</p>
                    </div>
                  </div>
                </AnimatedCard>
                <AnimatedCard category="education"  delay={100}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[#2e2e48]">{t.formation.funMooc.title}</h3>
                      <p className="text-[#79819a]">{t.formation.funMooc.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#79819a]">{t.formation.funMooc.period}</p>
                    </div>
                  </div>
                </AnimatedCard>
                <AnimatedCard category="education"  delay={100}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[#2e2e48]">{t.formation.firstAid.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[#79819a]">{t.formation.firstAid.period}</p>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
              
            </div>
          </section>

          {/* Engagements Section */}
          <section>
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <Heart className="w-6 h-6 text-[#ffcc00]" />
              <h2 className="text-xl font-bold text-[#2e2e48]">{t.engagements.title}</h2>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedCard category="engagement" logo="/eml.png" delay={100} className="cursor-pointer"
                  onClick={() => showDetails({
                    title: t.engagements.president.title,
                    content: (
                      <div className="space-y-4">
                        <div className="relative" style={{ overflow: 'hidden' }}>
                        <iframe 
                          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7193143806597230593" 
                          height="500" 
                          width="100%" 
                          frameborder="0" 
                          allowfullscreen="" 
                          title="Post intégré"
                          style={{ overflow: 'hidden', width: 'calc(100% + 17px)', marginRight: '-17px' }}
                        ></iframe>
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"/>
                        </div>
                      </div>
                    )
                  })}>
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.engagements.president.title} {t.engagements.president.subtitle || ""}</h3>
                    {t.engagements.president.descriptions.map((desc, idx) => (
                      <p key={idx} className="text-[#79819a]">{desc}</p>
                    ))}
                    <p className="text-[#79819a]">{t.engagements.president.period}</p>
                  </div>
                </AnimatedCard>
                <AnimatedCard category="engagement" logo="/aumonerie.png" delay={100}>
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.engagements.coordinator.title} {t.engagements.president.subtitle || ""}</h3>
                     <p className="text-[#79819a]">{t.engagements.coordinator.description}</p>
                    <p className="text-[#79819a]">{t.engagements.coordinator.period}</p>
                  </div>
                </AnimatedCard>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AnimatedCard category="engagement" delay={100}>
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.engagements.cubScout.title} {t.engagements.president.subtitle || ""}</h3>
                     <p className="text-[#79819a]">{t.engagements.cubScout.description}</p>
                    <p className="text-[#79819a]">{t.engagements.cubScout.period}</p>
                  </div>
                </AnimatedCard>
                <AnimatedCard category="engagement" delay={100}>
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.engagements.voluntaryTutor.title} {t.engagements.president.subtitle || ""}</h3>
                     <p className="text-[#79819a]">{t.engagements.voluntaryTutor.description}</p>
                    <p className="text-[#79819a]">{t.engagements.voluntaryTutor.period}</p>
                  </div>
                </AnimatedCard>
                <AnimatedCard category="engagement" delay={100}>
                  <div>
                    <h3 className="font-semibold text-[#2e2e48]">{t.engagements.classRep.title} {t.engagements.president.subtitle || ""}</h3>
                     <p className="text-[#79819a]">{t.engagements.classRep.description}</p>
                    <p className="text-[#79819a]">{t.engagements.classRep.period}</p>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </section>

          {/* References Section */}
          <section>
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <Users className="w-6 h-6 text-[#ffcc00]" />
              <h2 className="text-xl font-bold text-[#2e2e48]">{t.references.title || "References"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCard category="reference" logo="/doliam.png" delay={100}>
                <div>
                  <h3 className="font-semibold text-[#2e2e48]">{t.references.paulPremont.name}</h3>
                  <p className="text-[#79819a]">Designation: {t.references.paulPremont.designation}</p>
                  <p className="text-[#79819a]">Company: {t.references.paulPremont.company}</p>
                  <p className="text-[#79819a]">Contact: {t.references.paulPremont.contact}</p>
                  <p className="text-[#79819a]">Relationship: {t.references.paulPremont.relationship}</p>
                </div>
              </AnimatedCard>
              <AnimatedCard category="reference" logo="/ensicaen.png" delay={200}>
                <div>
                  <h3 className="font-semibold text-[#2e2e48]">{t.references.hugoDescoubes.name}</h3>
                  <p className="text-[#79819a]">Designation: {t.references.hugoDescoubes.designation}</p>
                  <p className="text-[#79819a]">Company: {t.references.hugoDescoubes.company}</p>
                  <p className="text-[#79819a]">Contact: {t.references.hugoDescoubes.contact}</p>
                  <p className="text-[#79819a]">Relationship: {t.references.hugoDescoubes.relationship}</p>
                </div>
              </AnimatedCard>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{selectedCard?.title}</DialogTitle>
                  </DialogHeader>
                  {selectedCard?.content}
                </DialogContent>
              </Dialog>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}