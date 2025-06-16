
import Plunk from 'plunk-node';

const PLUNK_API_KEY = "YOUR_PLUNK_API_KEY_HERE"; // 🚨 IMPORTANT: Replace with your actual Plunk API key

const plunk = new Plunk(PLUNK_API_KEY);

export const sendEmail = async ({ to, subject, body }) => {
  if (PLUNK_API_KEY === "YOUR_PLUNK_API_KEY_HERE") {
    console.warn(
      "Plunk API key not configured. Email sending is simulated. " +
      "Please replace 'YOUR_PLUNK_API_KEY_HERE' in src/lib/email.js with your actual Plunk API key."
    );
    // Simulate email sending for development without an API key
    return {
      success: true,
      message: "Email simulated successfully. Configure Plunk API key for actual sending.",
      data: { to, subject, body }
    };
  }

  try {
    const result = await plunk.emails.send({
      to,
      subject,
      body, // HTML content for the email body
    });
    console.log("Email sent successfully via Plunk:", result);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending email via Plunk:", error.message);
    // Log more detailed error if available
    if (error.response && error.response.data) {
        console.error("Plunk API Error Details:", error.response.data);
    }
    return { success: false, error: error.message || "Failed to send email" };
  }
};
