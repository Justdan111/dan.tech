"use client";

import { motion } from "framer-motion";
import {
	AlertTriangle,
	ArrowLeft,
	BarChart3,
	Brain,
	Building2,
	CalendarClock,
	CheckCircle2,
	ExternalLink,
	Github,
	HandCoins,
	Layers,
	ShieldAlert,
	TrendingUp,
	UserCircle2,
	Wallet,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

const challengePoints = [
	"Sales are often done on credit, but follow-up is inconsistent",
	"Debt records live in notebooks, chat threads, and memory",
	"Overdue payments are missed until cash flow is already strained",
	"Unclear payment history causes disputes and trust issues",
];

const workflow = [
	{
		icon: UserCircle2,
		title: "Add Customers",
		description:
			"Create customer profiles with contact details, debt behavior, and transaction history.",
	},
	{
		icon: HandCoins,
		title: "Record Debts",
		description:
			"Log credit sales instantly with amount, due date, and clear transaction notes.",
	},
	{
		icon: Wallet,
		title: "Track Payments",
		description:
			"Capture full or partial payments and update outstanding balances automatically.",
	},
	{
		icon: ShieldAlert,
		title: "Monitor Risk",
		description:
			"Detect risky payers using late-payment patterns, unpaid balances, and delay frequency.",
	},
	{
		icon: BarChart3,
		title: "View Insights",
		description:
			"See total outstanding debt, overdue trends, top debtors, and cash flow behavior at a glance.",
	},
];

const coreFeatures = [
	{
		icon: Building2,
		title: "Customer Management",
		details: "Store customer records and see each debt timeline in one place.",
	},
	{
		icon: HandCoins,
		title: "Debt Tracking",
		details: "Record debts per customer, assign due dates, and monitor balances in real time.",
	},
	{
		icon: Wallet,
		title: "Payment Management",
		details: "Log incoming payments, including partial settlements, with automatic recalculation.",
	},
	{
		icon: Brain,
		title: "Risk Scoring",
		details: "Categorize customers into low, medium, and high risk based on payment behavior.",
	},
	{
		icon: TrendingUp,
		title: "Analytics Dashboard",
		details: "Understand overdue performance, inflow trends, and debt concentration quickly.",
	},
	{
		icon: CalendarClock,
		title: "Smart Reminders (Phase 2)",
		details: "Automated reminders and overdue alerts to improve collection consistency.",
	},
];

const audiences = [
	"Small business owners",
	"Shop owners and wholesalers",
	"Service providers and freelancers",
	"SMEs operating on credit",
];

const stack = [
	{ label: "Frontend", value: "Next.js dashboard UI" },
	{ label: "Backend", value: "Golang API services" },
	{ label: "Database", value: "PostgreSQL financial records" },
	{ label: "Future AI", value: "Risk scoring and payment prediction" },
];

const vision = [
	"A financial control system for SMEs",
	"A credit intelligence layer for better decisions",
	"Lending and credit scoring integrations",
	"Automated reminders and mobile-first workflows",
	"AI-powered insights for proactive cash flow management",
];

export default function CredFlowPage() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			<main className="pt-24">
				<section className="relative overflow-hidden py-16 sm:py-24">
					<div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-background to-cyan-500/10" />
					<div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

					<div className="container relative z-10 mx-auto px-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="/#projects">
								<Button variant="ghost" size="sm" className="mb-8">
									<ArrowLeft className="mr-2 h-4 w-4" />
									Back to Projects
								</Button>
							</Link>

							<div className="max-w-5xl">
								<div className="mb-4 flex flex-wrap gap-2">
									{[
										"Fintech",
										"SME Tools",
										"Debt Tracking",
										"Cash Flow",
										"Risk Scoring",
									].map((item) => (
										<span
											key={item}
											className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-700 dark:text-emerald-300"
										>
											{item}
										</span>
									))}
								</div>

								<h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
									CredFlow
								</h1>
								<p className="mb-8 max-w-3xl text-xl text-muted-foreground sm:text-2xl">
									Customer debt tracking and cash flow intelligence platform helping SMEs stay in control of who owes,
									what is overdue, and when revenue is likely to come in.
								</p>

								<div className="grid gap-4 rounded-2xl border border-emerald-500/20 bg-background/70 p-5 backdrop-blur-sm sm:grid-cols-3">
									<div>
										<p className="text-xs uppercase tracking-wide text-muted-foreground">Primary Goal</p>
										<p className="mt-1 font-semibold">Reduce revenue loss from unpaid debts</p>
									</div>
									<div>
										<p className="text-xs uppercase tracking-wide text-muted-foreground">Core Metric</p>
										<p className="mt-1 font-semibold">Total outstanding and overdue amount</p>
									</div>
									<div>
										<p className="text-xs uppercase tracking-wide text-muted-foreground">Target Users</p>
										<p className="mt-1 font-semibold">SMEs, shops, wholesalers, freelancers</p>
									</div>
								</div>

								<div className="mt-8 flex flex-wrap gap-4">
									<Button onClick={() => window.open("https://credflow.example.com", "_blank")} variant="default" size="lg">
										<ExternalLink className="mr-2 h-4 w-4" />
										Live Demo
									</Button>
									<Button onClick={() => window.open("https://github.com/Justdan111/credflow", "_blank")} variant="outline" size="lg">
										<Github className="mr-2 h-4 w-4" />
										View Code
									</Button>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				<section className="py-16">
					<div className="container mx-auto px-6">
						<div className="mx-auto max-w-5xl space-y-16">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
							>
								<h2 className="gradient-text mb-4 text-2xl font-bold">What CredFlow Solves</h2>
								<p className="mb-6 text-lg leading-relaxed text-muted-foreground">
									Businesses do not usually fail because sales are low. They fail because receivables are invisible,
									follow-ups are irregular, and collections happen too late. CredFlow turns scattered debt records
									into a reliable operating system for revenue collection.
								</p>
								<div className="grid gap-4 sm:grid-cols-2">
									{challengePoints.map((point, index) => (
										<motion.div
											key={point}
											initial={{ opacity: 0, x: -24 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.08 }}
											className="glass-card rounded-xl p-5"
										>
											<div className="flex items-start gap-3">
												<AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
												<p className="text-sm text-muted-foreground">{point}</p>
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
							>
								<h2 className="gradient-text mb-8 text-2xl font-bold">How CredFlow Works</h2>
								<div className="space-y-4">
									{workflow.map((item, index) => (
										<motion.div
											key={item.title}
											initial={{ opacity: 0, y: 14 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.08 }}
											className="glass-card card-hover rounded-xl p-5"
										>
											<div className="flex items-start gap-4">
												<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
													<item.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
												</div>
												<div>
													<h3 className="font-semibold">
														<span className="mr-2 text-emerald-600 dark:text-emerald-300">{index + 1}.</span>
														{item.title}
													</h3>
													<p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
												</div>
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
							>
								<h2 className="gradient-text mb-8 text-2xl font-bold">Core Features</h2>
								<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
									{coreFeatures.map((feature, index) => (
										<motion.div
											key={feature.title}
											initial={{ opacity: 0, scale: 0.97 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.07 }}
											className="glass-card card-hover rounded-xl p-5"
										>
											<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
												<feature.icon className="h-5 w-5 text-primary" />
											</div>
											<h3 className="mb-2 font-semibold">{feature.title}</h3>
											<p className="text-sm text-muted-foreground">{feature.details}</p>
										</motion.div>
									))}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="grid gap-6 lg:grid-cols-2"
							>
								<div className="glass-card rounded-2xl p-6">
									<h2 className="gradient-text mb-4 text-2xl font-bold">Without vs With CredFlow</h2>
									<div className="space-y-4">
										<div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
											<p className="mb-1 text-sm font-semibold text-amber-700 dark:text-amber-300">Without CredFlow</p>
											  <p className="text-sm text-muted-foreground">&quot;I think this customer owes me... I forgot the date they promised.&quot;</p>
										</div>
										<div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
											<p className="mb-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">With CredFlow</p>
											<p className="text-sm text-muted-foreground">
												&quot;Customer A owes N50,000, overdue by 5 days. Customer B is high risk. Total outstanding is N500,000.&quot;
											</p>
										</div>
									</div>
								</div>

								<div className="glass-card rounded-2xl p-6">
									<h2 className="gradient-text mb-4 text-2xl font-bold">Who It Is For</h2>
									<ul className="space-y-3">
										{audiences.map((audience) => (
											<li key={audience} className="flex items-start gap-3 text-sm text-muted-foreground">
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
												{audience}
											</li>
										))}
									</ul>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="grid gap-6 lg:grid-cols-2"
							>
								<div className="glass-card rounded-2xl p-6">
									<h2 className="gradient-text mb-4 text-2xl font-bold">Technology Stack</h2>
									<div className="space-y-3">
										{stack.map((item) => (
											<div key={item.label} className="flex items-start justify-between gap-4 border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
												<p className="text-sm font-semibold">{item.label}</p>
												<p className="text-right text-sm text-muted-foreground">{item.value}</p>
											</div>
										))}
									</div>
								</div>

								<div className="glass-card rounded-2xl p-6">
									<h2 className="gradient-text mb-4 text-2xl font-bold">Bigger Vision</h2>
									<div className="space-y-3">
										{vision.map((item) => (
											<div key={item} className="flex items-start gap-3">
												<Layers className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
												<p className="text-sm text-muted-foreground">{item}</p>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
