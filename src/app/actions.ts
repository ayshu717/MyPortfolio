'use server';

import { portfolioData } from "@/lib/portfolio-data";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormState = {
  success: boolean;
  message: string;
}

export async function submitContactForm(prevState: any, formData: FormData): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your inputs.',
    }
  }

  try {
    const response = await fetch(portfolioData.contact.formspreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      return {
        success: true,
        message: "Your message has been sent successfully!",
      };
    } else {
      return {
        success: false,
        message: "There was an error sending your message. Please try again later.",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
