import Link from "next/link";
import React from "react";
import { Card } from "@/components/card";

const AllTopics = [
    {
      slug: 'codebytes',
      customText: 'Daily Coding Insights',
      title: 'Code Bytes',
      description: 'Dive into bite-sized coding tutorials and tips every day. Stay tuned for a journey of continuous learning, one byte at a time!',
    },
    {
      slug: 'beforeyoucode',
      customText: 'Pre-coding Handbook',
      title: 'Before You Code',
      description:'Embark on a thorough exploration of new programming languages, frameworks, and libraries before diving in. Stay tuned for in-depth reviews and insightful discussions, ensuring a well-informed start to your coding projects!',
    },
    
  ];
export const revalidate = 60;
export default async function ProjectsPage() {
  

      const featured = AllTopics;
	
	return (
		<div className="relative pb-16">
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Topics
					</h2>
					<p className="mt-4 text-foreground">
						List of all learning topics.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                {AllTopics.map((topic, index) => (
					<Card key={index}>
                    
						<Link href={`/learn/${topic.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
										
											<span className="text-foreground">{topic.customText}</span>
										
									</div>
								
								</div>

								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-foreground  sm:text-4xl font-display"
								>
									{topic.title}
								</h2>
								<p className="mt-4 leading-8 duration-150 text-foreground ">
									{topic.description}
								</p>
								<div className=" bottom-4 md:bottom-8">
									<p className="hidden text-foreground hover:text-foreground/50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>
                    ))}
				</div>

			
			</div>
		</div>
	);
}