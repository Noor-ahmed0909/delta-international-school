import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, DollarSign, CalendarCheck, ArrowRight } from "lucide-react";

const grades = [
  {
    id: "kg",
    label: "KG",
    fullName: "Kindergarten (Ages 4–6)",
    schedule: [
      { day: "Sunday – Thursday", time: "7:30 AM – 1:00 PM" },
    ],
    subjects: [
      { subject: "Arabic Language", periods: 5 },
      { subject: "English Language", periods: 6 },
      { subject: "French / German", periods: 4 },
      { subject: "Mathematics", periods: 4 },
      { subject: "Arts & Crafts", periods: 3 },
      { subject: "Physical Education", periods: 2 },
      { subject: "Music & Movement", periods: 2 },
      { subject: "Free Play / Discovery", periods: 4 },
    ],
    fees: {
      tuition: "25,000 EGP",
      registration: "3,000 EGP",
      books: "2,500 EGP",
      uniform: "1,500 EGP",
      bus: "5,000 EGP (optional)",
    },
    deadlines: [
      { label: "Early Bird Registration", date: "March 31, 2026", note: "10% discount on tuition" },
      { label: "Regular Registration", date: "June 15, 2026", note: "Standard fees apply" },
      { label: "First Installment Due", date: "August 1, 2026", note: "50% of tuition" },
      { label: "Second Installment Due", date: "December 1, 2026", note: "Remaining 50%" },
    ],
  },
  {
    id: "primary",
    label: "Primary",
    fullName: "Primary School (Ages 6–12)",
    schedule: [
      { day: "Sunday – Thursday", time: "7:30 AM – 2:30 PM" },
    ],
    subjects: [
      { subject: "Arabic Language", periods: 6 },
      { subject: "English Language", periods: 7 },
      { subject: "French / German", periods: 5 },
      { subject: "Mathematics", periods: 6 },
      { subject: "Science", periods: 4 },
      { subject: "Social Studies", periods: 3 },
      { subject: "ICT", periods: 2 },
      { subject: "Physical Education", periods: 2 },
      { subject: "Art & Music", periods: 2 },
    ],
    fees: {
      tuition: "32,000 EGP",
      registration: "3,500 EGP",
      books: "3,000 EGP",
      uniform: "1,500 EGP",
      bus: "5,500 EGP (optional)",
    },
    deadlines: [
      { label: "Early Bird Registration", date: "March 31, 2026", note: "10% discount on tuition" },
      { label: "Regular Registration", date: "June 15, 2026", note: "Standard fees apply" },
      { label: "First Installment Due", date: "August 1, 2026", note: "50% of tuition" },
      { label: "Second Installment Due", date: "December 1, 2026", note: "Remaining 50%" },
    ],
  },
  {
    id: "preparatory",
    label: "Preparatory",
    fullName: "Preparatory School (Ages 12–15)",
    schedule: [
      { day: "Sunday – Thursday", time: "7:15 AM – 3:00 PM" },
    ],
    subjects: [
      { subject: "Arabic Language", periods: 5 },
      { subject: "English Language", periods: 7 },
      { subject: "French / German", periods: 5 },
      { subject: "Mathematics", periods: 7 },
      { subject: "Science (Physics, Chemistry, Biology)", periods: 6 },
      { subject: "Social Studies", periods: 3 },
      { subject: "ICT", periods: 2 },
      { subject: "Physical Education", periods: 2 },
    ],
    fees: {
      tuition: "38,000 EGP",
      registration: "4,000 EGP",
      books: "3,500 EGP",
      uniform: "1,500 EGP",
      bus: "6,000 EGP (optional)",
    },
    deadlines: [
      { label: "Early Bird Registration", date: "March 31, 2026", note: "10% discount on tuition" },
      { label: "Regular Registration", date: "June 15, 2026", note: "Standard fees apply" },
      { label: "First Installment Due", date: "August 1, 2026", note: "50% of tuition" },
      { label: "Second Installment Due", date: "December 1, 2026", note: "Remaining 50%" },
    ],
  },
  {
    id: "secondary",
    label: "Secondary",
    fullName: "Secondary School (Ages 15–18)",
    schedule: [
      { day: "Sunday – Thursday", time: "7:15 AM – 3:30 PM" },
    ],
    subjects: [
      { subject: "Arabic Language", periods: 5 },
      { subject: "English Language", periods: 7 },
      { subject: "French / German", periods: 5 },
      { subject: "Mathematics", periods: 7 },
      { subject: "Physics", periods: 4 },
      { subject: "Chemistry", periods: 4 },
      { subject: "Biology", periods: 3 },
      { subject: "Social Studies / Philosophy", periods: 2 },
      { subject: "ICT", periods: 2 },
    ],
    fees: {
      tuition: "45,000 EGP",
      registration: "5,000 EGP",
      books: "4,000 EGP",
      uniform: "1,500 EGP",
      bus: "6,500 EGP (optional)",
    },
    deadlines: [
      { label: "Early Bird Registration", date: "March 31, 2026", note: "10% discount on tuition" },
      { label: "Regular Registration", date: "June 15, 2026", note: "Standard fees apply" },
      { label: "First Installment Due", date: "August 1, 2026", note: "50% of tuition" },
      { label: "Second Installment Due", date: "December 1, 2026", note: "Remaining 50%" },
    ],
  },
];

const Enroll = () => {
  return (
    <Layout>
      <PageHeader
        title="Enrollment & Fees"
        subtitle="View schedules, tuition fees, and payment deadlines for each grade level at Delta International Language Schools."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="kg" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-1 bg-secondary p-1 rounded-xl">
              {grades.map((g) => (
                <TabsTrigger
                  key={g.id}
                  value={g.id}
                  className="py-3 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                >
                  {g.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {grades.map((grade) => (
              <TabsContent key={grade.id} value={grade.id} className="mt-8 space-y-8">
                {/* Grade Header */}
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{grade.fullName}</h2>
                  <p className="text-muted-foreground mt-2">
                    {grade.schedule[0].day} • {grade.schedule[0].time}
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Schedule / Subjects */}
                  <Card className="lg:col-span-2">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Clock className="w-5 h-5 text-primary" />
                        Weekly Schedule
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Subject</TableHead>
                            <TableHead className="text-right">Periods / Week</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {grade.subjects.map((s) => (
                            <TableRow key={s.subject}>
                              <TableCell className="font-medium">{s.subject}</TableCell>
                              <TableCell className="text-right">
                                <Badge variant="secondary">{s.periods}</Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                          <TableRow className="bg-secondary/50 font-semibold">
                            <TableCell>Total</TableCell>
                            <TableCell className="text-right">
                              <Badge>{grade.subjects.reduce((a, b) => a + b.periods, 0)}</Badge>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  {/* Fees */}
                  <Card>
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <DollarSign className="w-5 h-5 text-accent" />
                        Tuition & Fees
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(grade.fees).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-sm text-muted-foreground capitalize">{key}</span>
                          <span className="font-semibold text-sm">{value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Payment Deadlines */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CalendarCheck className="w-5 h-5 text-primary" />
                      Payment Deadlines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {grade.deadlines.map((d, i) => (
                        <div
                          key={d.label}
                          className="relative p-4 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-colors"
                        >
                          <span className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                            {i + 1}
                          </span>
                          <h4 className="font-semibold text-sm mb-1">{d.label}</h4>
                          <p className="text-primary font-bold text-sm mb-1">{d.date}</p>
                          <p className="text-xs text-muted-foreground">{d.note}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <div className="text-center pt-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Link to="/admissions">
                      Apply Now for {grade.label} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Enroll;
