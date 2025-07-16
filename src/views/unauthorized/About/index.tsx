import React, { FC } from "react";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { aboutConfig } from "@/_kernel/mock/about.config";
import { text } from "@/_kernel/assets/styles/primitives";
import { GithubIcon } from "@/shared/ui/icons/base";
import { HeroSection } from "@/widgets/HeroSection";

export const About: FC = () => {
  const renderTechStack = (stack: { category: string; items: string[] }) => (
    <div key={stack.category} className="space-y-2">
      <h4 className="font-medium text-lg flex items-center gap-2">
        {stack.category === "Frontend" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        )}
        {stack.category === "Backend" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        )}
        {stack.category === "Stream Service" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        )}
        {stack.category === "Инфраструктура" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        )}
        {stack.category}
      </h4>
    </div>
  );

  return (
    <>
      <HeroSection
        title={aboutConfig.header.title}
        subtitle={aboutConfig.header.subtitle}
        description={aboutConfig.header.description}
      />

      {/* Architecture Section */}
      <Card className="dark:bg-[#f1f1f10c] p-2">
        <CardHeader>
          <h2 className="text-2xl font-bold">{aboutConfig.architecture.title}</h2>
        </CardHeader>
        <CardBody className="grid md:grid-cols-3 gap-6">
          {aboutConfig.architecture.components.map((component) => (
            <div key={component.name} className="space-y-3">
              <h3 className="text-xl font-semibold">{component.name}</h3>
              <p className={text()}>{component.description}</p>
              <ul className={`${text()} list-disc pl-5 space-y-1`}>
                {component.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardBody>
        {aboutConfig.architecture.diagram && (
          <CardFooter className="justify-center">
            <img
              src={aboutConfig.architecture.diagram}
              alt="System Architecture"
              className="rounded-lg border"
            />
          </CardFooter>
        )}
      </Card>

      {/* Tech Stack Section */}
      <Card className="dark:bg-[#f1f1f10c] p-2">
        <CardHeader>
          <h2 className="text-2xl font-bold">{aboutConfig.technologies.title}</h2>
        </CardHeader>
        <CardBody className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutConfig.technologies.stacks.map(renderTechStack)}
        </CardBody>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="dark:bg-[#f1f1f10c] p-2">
          <CardHeader>
            <h2 className="text-2xl font-bold">{aboutConfig.features.title}</h2>
          </CardHeader>
          <CardBody className="grid gap-4">
            {aboutConfig.features.items.map((feature) => (
              <div key={feature.title} className="space-y-1">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className={text()}>{feature.description}</p>
              </div>
            ))}
          </CardBody>
        </Card>

        {/* Performance Section */}
        <Card className="dark:bg-[#f1f1f10c] p-2">
          <CardHeader>
            <h2 className="text-2xl font-bold">{aboutConfig.performance.title}</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div className="space-y-2">
                {aboutConfig.performance.metrics.map((metric) => (
                  <div key={metric.name} className="flex justify-between">
                    <span className={text()}>{metric.name}:</span>
                    <span className="font-medium">{metric.value}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-4">
                <h4 className="font-semibold">{aboutConfig.performance.comparison.title}</h4>
                <ul className={`${text()} list-disc pl-5 space-y-1`}>
                  {aboutConfig.performance.comparison.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Roadmap Section */}
      <Card className="dark:bg-[#f1f1f10c] p-2">
        <CardHeader>
          <h2 className="text-2xl font-bold">{aboutConfig.roadmap.title}</h2>
        </CardHeader>
        <CardBody className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Текущие задачи</h3>
            <ul className={`${text()} list-disc pl-5 space-y-2`}>
              {aboutConfig.roadmap.current.map((item, i) => (
                <li key={`current-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Будущие планы</h3>
            <ul className={`${text()} list-disc pl-5 space-y-2`}>
              {aboutConfig.roadmap.future.map((item, i) => (
                <li key={`future-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>

      {/* CTA Section */}
      <Card className="dark:bg-[#f1f1f10c] p-2">
        <CardHeader>
          <h2 className="text-2xl font-bold">{aboutConfig.cta.title}</h2>
        </CardHeader>
        <CardBody>
          <p className={`${text()} mb-6 text-center`}>{aboutConfig.cta.content}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {aboutConfig.cta.buttons.map((button) => (
              <Button
                key={button.text}
                as={Link}
                href={button.url}
                variant={button.text.includes("GitHub") ? "solid" : "bordered"}
                size="lg"
                className="gap-2"
              >
                {button.text}
                {/* {button.url.startsWith('http') && <ExternalLink size={16} />} */}
                {button.text.includes("GitHub") && <GithubIcon size={16} />}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </>
  );
};
