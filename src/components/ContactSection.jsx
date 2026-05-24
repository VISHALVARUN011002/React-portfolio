import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim(),
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim(),
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim(),
};

const isEmailjsConfigured = Object.values(emailjsConfig).every(Boolean);

const getEmailErrorMessage = (error) => {
  const status = error?.status;

  if (!isEmailjsConfigured) {
    return "Email service is not configured yet. Please use the direct email link for now.";
  }

  if (status === 400 || status === 401 || status === 403) {
    return "Email service rejected the request. Please email me directly while I check the configuration.";
  }

  if (status === 429) {
    return "Too many messages were sent in a short time. Please try again in a few minutes.";
  }

  return "Something went wrong while sending your message. Please try again or email me directly.";
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isEmailjsConfigured) {
      emailjs.init({
        publicKey: emailjsConfig.publicKey,
      });
    } else {
      console.warn(
        "EmailJS is not configured. Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to the deployment environment."
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      if (!isEmailjsConfigured) {
        throw new Error("Missing EmailJS environment variables");
      }

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          to_email: "vishalkumarvarun01@gmail.com",
          from_name: name,
          from_email: email,
          message: message,
        },
        {
          publicKey: emailjsConfig.publicKey,
        }
      );

      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "success",
        });
        e.target.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Failed to send",
        description: getEmailErrorMessage(error),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="relative bg-secondary/40 px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Contact</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Have an idea that needs a better web presence?
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Send the details and I will get back to you with a practical next
            step.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 text-left">
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-black">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a
                      href="mailto:vishalkumarvarun01@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      vishalkumarvarun01@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <a
                      href="tel:+916393204940"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 63932 04940
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-secondary p-3">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-muted-foreground">
                      Gorakhpur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h4 className="mb-4 font-bold">Connect With Me</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/vishal-varun-385a94257/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-primary hover:text-primary"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://x.com/Vishalvarun1208?t=_f6Drwz5xVQNjY8NNDNR5g&s=09"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-primary hover:text-primary"
                  >
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 text-left md:p-8">
            <h3 className="mb-6 text-2xl font-black">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button flex w-full items-center justify-center gap-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
