package org.plu.rest.controllers.rest.mail;

import java.util.Properties;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class Mail {

    //String to = "amatovic15@raf.rs";
    //String SADRZAJ;;
    static final String POSILJALAC = "amatovic15@raf.rs";
    static final String LOZINKA = "aleksasilde";
    static Properties props = new Properties();

    public Mail(){
        super();
    }

    public static boolean sendMail(String primalac, String SADRZAJ) {
        SADRZAJ = String.format(SADRZAJ);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
        props.put("mail.debug", "true"); // linija koja sluzi za debug mail-a
        props.put("mail.HTML", "true");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(POSILJALAC, LOZINKA);
            }
        });

        try {

            // Create a default MimeMessage object.
            MimeMessage mm = new MimeMessage(session);

            // Set From: header field of the header.
            mm.setFrom(new InternetAddress(POSILJALAC));

            // Set To: header field of the header.
            mm.addRecipient(Message.RecipientType.TO, new InternetAddress(primalac));

            // Set Subject: header field
            mm.setSubject("WebShop");

            // Now set the actual message
            //mm.setText(SADRZAJ);


            Multipart mp = new MimeMultipart();
            MimeBodyPart htmlPart = new MimeBodyPart();
            htmlPart.setContent(SADRZAJ, "text/html");
            mp.addBodyPart(htmlPart);
            mm.setContent(mp);

            // Send message
            Transport.send(mm);
            System.out.println("Sent message successfully....");
            return true;
        } catch (MessagingException mex) {
            System.out.println(mex);
        }
        return false;
    }

}
