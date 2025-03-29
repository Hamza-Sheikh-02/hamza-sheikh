import { toast } from "@/hooks/use-toast";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Set up the EmailJS service
    // Note: In a real implementation, you would use a service like EmailJS, FormSubmit, or a serverless function
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject || "Contact Form Submission");
    formData.append("message", data.message);

    // For this example, we're using FormSubmit which is a free email service
    // Replace this URL with your own form endpoint
    const response = await fetch("https://formsubmit.co/hamzahamza.sheikh2009@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    toast({
      title: "Error",
      description: "Failed to send your message. Please try again later.",
      variant: "destructive",
    });
    return false;
  }
};
