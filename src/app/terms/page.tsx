import { Section } from "@/components/section";
import { Heading, Text } from "@/components/ui/typography";

export default function TermsPage() {
  return (
    <Section centerContent>
      <Heading variant="h1" size="4xl" className="mb-16 text-center">
        Terms
      </Heading>
      <div className="flex flex-col gap-8 mx-auto max-w-3xl">
        <Heading variant="h2" size="base" className="mb-4">
          Terms & Conditions of Virtual Labs
        </Heading>

        <Text>
          {`Welcome to Virtual Labs, a platform for verifiable randomness on blockchain. By accessing
          our website or using our services, you agree to comply with and be bound by the following
          terms and conditions ("Terms") which govern the use of our platform.`}
        </Text>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            1. General Terms
          </Heading>
          <div className="flex flex-col gap-4">
            <div>
              <Text className="font-semibold">1.1 Eligibility</Text>
              <Text>
                To use Virtual Labs, you must be at least 18 years old or the legal age of majority
                in your jurisdiction, whichever is greater. You are responsible for ensuring that
                your use of Virtual Labs is legal in your jurisdiction.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">1.2 Acceptance</Text>
              <Text>
                By using Virtual Labs, you accept and agree to these Terms. If you do not agree to
                these Terms, you must not use our platform.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">1.3 Modifications</Text>
              <Text>
                We reserve the right to modify these Terms at any time, without prior notice. Your
                continued use of Virtual Labs after the modifications will constitute your
                acceptance of the modified Terms. It is your responsibility to regularly review
                these Terms to ensure that you are aware of any changes.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">1.4 Termination</Text>
              <Text>
                We reserve the right to terminate or suspend your access to Virtual Labs at any
                time, without prior notice, for any reason, including, but not limited to, breach of
                these Terms.
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            2. User Accounts
          </Heading>
          <div className="flex flex-col gap-4">
            <div>
              <Text className="font-semibold">2.1 Registration</Text>
              <Text>
                To use certain features of Virtual Labs, you may be required to register an account.
                You are responsible for maintaining the confidentiality of your account information,
                including your username and password, and for any activity that occurs under your
                account.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">2.2 Accuracy</Text>
              <Text>
                You must provide accurate and complete information when registering your account,
                and you must keep your account information up to date.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">2.3 Prohibited Activities</Text>
              <Text>
                {`You must not use another user's account without their permission. You must not use
                Virtual Labs for any illegal or unauthorized purpose, including, but not limited to,
                fraud, money laundering, or terrorist financing.`}
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            3. Verifiable Randomness
          </Heading>
          <div className="flex flex-col gap-4">
            <div>
              <Text className="font-semibold">3.1 Description</Text>
              <Text>
                Virtual Labs provides a platform for generating verifiable random numbers on the
                blockchain. Our platform is designed to ensure fairness and transparency in the
                generation of random numbers.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">3.2 Results</Text>
              <Text>
                The random numbers generated by Virtual Labs are based on a complex algorithm that
                uses cryptographic techniques to ensure that the numbers are truly random. The
                results of the random number generation are stored on the blockchain and can be
                verified by anyone.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">3.3 Fairness</Text>
              <Text>
                Virtual Labs is committed to providing a fair and transparent platform for
                generating random numbers. We use an open-source algorithm that has been
                peer-reviewed to ensure that it is fair and unbiased.
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            4. Use of Virtual Labs
          </Heading>
          <div className="flex flex-col gap-4">
            <div>
              <Text className="font-semibold">4.1 License</Text>
              <Text>
                We grant you a limited, non-exclusive, non-transferable license to use Virtual Labs
                for your personal, non-commercial use only. You may not use Virtual Labs for any
                commercial purpose without our prior written consent.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">4.2 Restrictions</Text>
              <Text>
                {`You must not use Virtual Labs in any manner that could damage, disable, overburden,
                or impair our platform or interfere with any other party's use and enjoyment of our
                platform. You must not attempt to gain unauthorized access to any part of our
                platform or any of its systems or networks.`}
              </Text>
            </div>

            <div>
              <Text className="font-semibold">4.3 Intellectual Property</Text>
              <Text>
                Virtual Labs and its content are protected by copyright, trademark, and other
                intellectual property laws. You may not copy, reproduce, distribute, modify, or
                create derivative works of any part of Virtual Labs without our prior written
                consent.
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            5. Disclaimer of Warranties
          </Heading>
          <div className="flex flex-col gap-4">
            <div>
              <Text className="font-semibold">5.1 No Warranty</Text>
              <Text>
                {`Virtual Labs is provided on an "as is" and "as available" basis, without any
                warranties of any kind, express or implied, including, but not limited to,
                warranties of merchantability, fitness for a particular purpose, non-infringement,
                or course of performance.`}
              </Text>
            </div>

            <div>
              <Text className="font-semibold">5.2 No Liability</Text>
              <Text>
                We do not warrant that Virtual Labs will meet your requirements, be uninterrupted,
                error-free, or secure, or that any defects in the platform will be corrected. We
                make no guarantee that the results obtained from the use of Virtual Labs will be
                accurate or reliable. Any reliance you place on Virtual Labs is at your own risk.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">5.3 No Responsibility</Text>
              <Text>
                We are not responsible for any damages or losses arising from your use of Virtual
                Labs, including, but not limited to, direct, indirect, incidental, punitive, and
                consequential damages. This includes any damages resulting from the loss of data,
                profits, or business opportunities.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">5.4 Third-Party Content</Text>
              <Text>
                Virtual Labs may contain links to third-party websites, services, or content that
                are not owned or controlled by us. We do not endorse or assume any responsibility
                for any third-party content, websites, or services. Your use of such third-party
                content, websites, or services is at your own risk.
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            6. Indemnification
          </Heading>
          <Text>
            {`You agree to indemnify and hold Virtual Labs and its affiliates, officers, directors,
            employees, and agents harmless from any claims, liabilities, damages, losses, and
            expenses, including reasonable attorneys' fees, arising out of your use of Virtual Labs,
            your violation of these Terms, or your violation of any third-party rights.`}
          </Text>
        </div>

        <div>
          <Heading variant="h2" size="lg" className="mb-4">
            7. Miscellaneous
          </Heading>
          <div className="flex flex-col gap-4">
            <div>
              <Text className="font-semibold">7.1 Entire Agreement</Text>
              <Text>
                These Terms constitute the entire agreement between you and Virtual Labs with
                respect to the use of our platform and supersede all prior or contemporaneous
                communications and proposals, whether oral or written, between you and Virtual Labs.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">7.2 No Waiver</Text>
              <Text>
                Our failure to enforce any right or provision of these Terms shall not be deemed a
                waiver of such right or provision.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">7.3 Severability</Text>
              <Text>
                If any provision of these Terms is found to be invalid or unenforceable, the
                remaining provisions shall remain in full force and effect.
              </Text>
            </div>

            <div>
              <Text className="font-semibold">7.4 Assignment</Text>
              <Text>
                You may not assign or transfer these Terms, in whole or in part, without our prior
                written consent. We may assign or transfer these Terms, in whole or in part, without
                your consent.
              </Text>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t">
          <Heading variant="h2" size="xl" className="mb-4">
            Contact Us
          </Heading>
          <Text>
            If you have any questions or concerns about these Terms, please contact us at{" "}
            <span className="text-secondary hover:underline">
              <a href="mailto:team@virtuallabs.networks">team@virtuallabs.networks</a>
            </span>
          </Text>
        </div>
      </div>
    </Section>
  );
}
