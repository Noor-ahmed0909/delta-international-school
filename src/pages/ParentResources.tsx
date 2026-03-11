import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Users } from "lucide-react";

const faqs = [
  {
    q: "What languages are taught at Delta International Language Schools?",
    a: "We offer full immersion in English, French, and German from Kindergarten through Secondary. Native-speaking teachers lead each language program to ensure authentic fluency development.",
  },
  {
    q: "What is the student-to-teacher ratio?",
    a: "We maintain a 1:6 teacher-to-student ratio to ensure personalized attention and a nurturing learning environment for every child.",
  },
  {
    q: "What curriculum does the school follow?",
    a: "Our curriculum blends the Egyptian national framework with international standards. We also offer the IB Diploma Programme for Secondary students seeking globally recognized qualifications.",
  },
  {
    q: "Are there extracurricular activities available?",
    a: "Yes! We offer a wide range of activities including sports teams, arts and music programs, science clubs, debate societies, and community service initiatives.",
  },
  {
    q: "What are the school hours?",
    a: "School hours are Sunday through Thursday, 8:00 AM to 3:00 PM. After-school activities and tutoring sessions are available until 4:30 PM.",
  },
  {
    q: "How can I track my child's academic progress?",
    a: "Parents receive termly report cards and have access to our parent portal for real-time updates. We also hold parent-teacher conferences twice per academic year.",
  },
  {
    q: "Is transportation provided?",
    a: "Yes, we offer safe and reliable bus services covering Talkha and surrounding areas in Dakahlia Governorate. Routes and fees are available upon request.",
  },
  {
    q: "What is the admission process?",
    a: "The process includes submitting an application, attending a parent interview, a student assessment (age-appropriate), and document verification. Visit our Admissions page for full details.",
  },
];

const interviewQuestions = [
  {
    category: "Family Background",
    questions: [
      "Can you tell us about your family structure and home environment?",
      "What languages are spoken at home?",
      "How would you describe your child's relationship with siblings or other family members?",
    ],
  },
  {
    category: "Child's Development",
    questions: [
      "What are your child's strengths and areas where they may need support?",
      "Does your child have any special needs or medical conditions we should be aware of?",
      "How does your child interact with other children in social settings?",
    ],
  },
  {
    category: "Educational Expectations",
    questions: [
      "Why did you choose Delta International Language Schools for your child?",
      "What are your expectations regarding your child's education and development?",
      "How do you plan to support your child's learning at home?",
    ],
  },
  {
    category: "Values & Discipline",
    questions: [
      "What values are most important to your family?",
      "How do you handle discipline and behavioural challenges at home?",
      "What role do you believe parents should play in a child's school life?",
    ],
  },
];

const ParentResources = () => {
  return (
    <Layout>
      <PageHeader
        title="Parent Resources"
        subtitle="Frequently asked questions and everything you need to know about the parent interview process."
      />

      {/* Interview Questions Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="icon-circle shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="section-title mb-0">Parent Interview Preparation</h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            As part of our admissions process, we conduct a brief interview with parents to better understand your family's values and your child's needs. Below are the types of questions you can expect.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {interviewQuestions.map((group) => (
              <Card key={group.category} className="border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-display">
                    {group.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {group.questions.map((q, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary font-bold mt-0.5 shrink-0">{i + 1}.</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="icon-circle shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="section-title mb-0">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default ParentResources;
