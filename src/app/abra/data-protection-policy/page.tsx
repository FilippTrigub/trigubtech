import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
      <div className="min-h-screen text-gray-900 flex flex-col bg-gray-50">
        <Header />

        <main className="pt-32 flex-1 max-w-4xl mx-auto px-6 pb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600 text-lg">
                Effective: 23.01.2024
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-gray max-w-none">
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <p>
                  We at Trigub Technologies respect your privacy and are strongly committed to keeping secure any information we obtain from you or about you. This Privacy Policy describes our practices with respect to Personal Data we collect from or about you when you use our website, applications, and services (collectively, "Services").
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Data Controller</h2>
                <p>
                  Trigub Technologies OÜ, with its registered office at Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 5, 10117 Estonia, is the controller and is responsible for the processing of your Personal Data as described in this Privacy Policy.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Personal Data We Collect</h2>
                <p>We collect personal data relating to you ("Personal Data") as described below:</p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Personal Data You Provide</h3>
                <p>We collect the following Personal Data when you create an account or communicate with us:</p>

                <div className="space-y-4">
                  <p><strong>Account Information:</strong> When you create an account with us, we collect information associated with your account, including your name, contact information, account credentials, payment card information, and transaction history (collectively, "Account Information").</p>

                  <p><strong>User Content:</strong> When you use our Services, we collect Personal Data that is included in the input, file uploads, or feedback that you provide to our Services ("Content").</p>

                  <p><strong>Communication Information:</strong> If you communicate with us, we collect your name, contact information, and the contents of any messages you send (collectively, "Communication Information").</p>

                  <p><strong>Other Information You Provide:</strong> We collect other information that you may provide to us, such as when you participate in our events or surveys or provide us with information to establish your age or identity (collectively, "Other Information You Provide").</p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Personal Data We Receive Automatically From Your Use of the Services</h3>
                <p>When you visit, use, or interact with the Services, we receive the following information ("Technical Information"):</p>

                <div className="space-y-4">
                  <p><strong>Log Data:</strong> Information that your browser or device automatically sends when you use our Services. Log data includes your Internet Protocol address, browser type and settings, the date and time of your request, and how you interact with our Services.</p>

                  <p><strong>Usage Data:</strong> We may automatically collect information about your use of the Services, such as the types of content that you view or engage with, the features you use and the actions you take, as well as your time zone, country, the dates and times of access, user agent and version, type of computer or mobile device, and your computer connection.</p>

                  <p><strong>Device Information:</strong> Includes name of the device, operating system, device identifiers, and browser you are using. Information collected may depend on the type of device you use and its settings.</p>

                  <p><strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to operate and administer our Services, and improve your experience. For details about our use of cookies, please visit our Cookie Notice.</p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Personal Data We Receive From Other Sources</h3>
                <p>
                  We collect information from other sources, like information that is publicly available on the internet, in particular to develop the technology that power our Services. We also receive information from our trusted partners, such as security partners to protect against fraud, abuse, and other security threats to our Services or marketing vendors who provide us with information about potential customers of our business services.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How We Use Personal Data</h2>
                <p>We may use Personal Data for the following purposes:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our Services;</li>
                  <li>To improve and develop our Services and new features and conduct research;</li>
                  <li>To communicate with you, including to send you information or marketing about our Services and events;</li>
                  <li>To prevent fraud, criminal activity, or misuses of our Services, and to protect the security of our systems and Services; and</li>
                  <li>To comply with legal obligations and to protect the rights, privacy, safety, or property of our users, us, our affiliates, or any third party.</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Aggregated or De-Identified Information</h3>
                <p>
                  We aggregate or de-identify Personal Data so that it can no longer be used to identify you and use this information to analyze the effectiveness of our Services, to improve and add features to our Services, to conduct research and for other similar purposes. In addition, from time to time, we may share or publish aggregated information like general user statistics with third parties.
                </p>

                <p>
                  We collect this information through the Services, through cookies, and through other means described in this Privacy Policy. We will maintain and use de-identified information in anonymous or de-identified form and we will not attempt to re-identify the information, unless required by law.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Disclosure of Personal Data</h2>
                <p>In certain circumstances we may disclose your Personal Data to:</p>

                <div className="space-y-4">
                  <p><strong>Vendors and Service Providers:</strong> To assist us in meeting business operations needs and to perform certain services and functions, we may disclose Personal Data to vendors and service providers, including providers of hosting services, customer service vendors, cloud services, content delivery services, data warehouse services, support and safety monitoring services, email communication software, web analytics services, payment and transaction providers, and other information technology services providers. Pursuant to our instructions, these parties will access, process, or store Personal Data only in the course of performing their duties to us.</p>

                  <p><strong>Business Transfers:</strong> If we are involved in strategic transactions, reorganization, bankruptcy, receivership, or transition of service to another provider (collectively, a "Transaction"), your Personal Data and other information may be disclosed in the diligence process with counterparties and others assisting with the Transaction and transferred to a successor or affiliate as part of that Transaction along with other assets.</p>

                  <p><strong>Government Authorities or Other Third Parties:</strong> We may share your Personal Data, including information about your interaction with our Services, with government authorities, industry peers, or other third parties in compliance with the law (i) if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, (ii) to protect and defend our rights or property, (iii) if we determine, in our sole discretion, that there is a violation of our terms, policies, or the law; (iv) to detect or prevent fraud or other illegal activity; (v) to protect the safety, security, and integrity of our products, employees, or users, or the public, or (vi) to protect against legal liability.</p>

                  <p><strong>Affiliates:</strong> We may disclose Personal Data to our affiliates, meaning an entity that controls, is controlled by, or is under common control with Trigub Technologies. Our affiliates may use the Personal Data we share in a manner consistent with this Privacy Policy.</p>

                  <p><strong>Business Account Administrators:</strong> When you join an Trigub Technologies account, the administrator of that account may access and control your Trigub Technologies account.</p>
                </div>

                <p>
                  In addition, if you create an account using an email address belonging to your employer or organization, we may share the fact that you have an account and certain account information, such as your email address, with your employer or organization to, for example, enable you to be added to their business account.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Retention</h2>
                <p>
                  We'll retain your Personal Data for only as long as we need in order to provide our Service to you, or for other legitimate business purposes such as resolving disputes, safety and security reasons, or complying with our legal obligations. How long we retain Personal Data will depend on a number of factors, such as:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Our purpose for processing the data (such as whether we need to retain the data to provide our Services);</li>
                  <li>The amount, nature, and sensitivity of the data;</li>
                  <li>The potential risk of harm from unauthorized use or disclosure of the data;</li>
                  <li>Any legal requirements that we are subject to.</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Your Rights</h2>
                <p>You have the following statutory rights in relation to your Personal Data:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your Personal Data and information relating to how it is processed.</li>
                  <li>Delete your Personal Data from our records.</li>
                  <li>Rectify or update your Personal Data.</li>
                  <li>Transfer your Personal Data to a third party (right to data portability).</li>
                  <li>Restrict how we process your Personal Data.</li>
                  <li>Withdraw your consent—where we rely on consent as the legal basis for processing at any time.</li>
                  <li>Lodge a complaint with your local data protection authority.</li>
                </ul>

                <p>You have the following rights to object:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Object to our processing of your Personal Data for direct marketing at any time.</li>
                  <li>Object to how we process your Personal Data when our processing is based on our legitimate interests.</li>
                </ul>

                <p>
                  You can exercise some of these rights through your Trigub Technologies account. If you are unable to exercise your rights through your account, please submit your request to{' '}
                  <a href="mailto:filipp@trigub.tech" className="text-blue-600 hover:underline">
                    filipp@trigub.tech
                  </a>
                  .
                </p>

                <p>
                  Please note these rights may be limited, for example if fulfilling your request would reveal Personal Data about another person, or if you ask us to delete information that we are required by law or have compelling legitimate interests to keep.
                </p>

                <p>We hope that we are able to address any questions or concerns you may have.</p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Note About Accuracy</h3>
                <p>
                  Our Services generate responses by reading a user's request and, in response, predicting the words most likely to appear next. In some cases, the words most likely to appear next may not be the most factually accurate. For this reason, you should not rely on the factual accuracy of output from our models.
                </p>

                <p>
                  If you notice that the output contains factually inaccurate information about you and you would like us to correct the inaccuracy, you may submit a correction request to{' '}
                  <a href="mailto:filipp@trigub.tech" className="text-blue-600 hover:underline">
                    filipp@trigub.tech
                  </a>
                  . Given the technical complexity of how our models work, we may not be able to correct the inaccuracy in every instance. In that case, you may request that we remove your Personal Data from the output by contacting us at{' '}
                  <a href="mailto:filipp@trigub.tech" className="text-blue-600 hover:underline">
                    filipp@trigub.tech
                  </a>
                  .
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Children</h2>
                <p>
                  Our Services are not directed to, or intended for, children under 13. We do not knowingly collect Personal Data from children under 13. If you have reason to believe that a child under 13 has provided Personal Data to Trigub Technologies through the Services, please email us at{' '}
                  <a href="mailto:filipp@trigub.tech" className="text-blue-600 hover:underline">
                    filipp@trigub.tech
                  </a>
                  . We will investigate any notification and, if appropriate, delete the Personal Data from our systems. Users under 18 must have permission from their parent or guardian to use our Services.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Data Transfers</h2>
                <p>
                  We will transfer your Personal Data to recipients outside of the EEA, Switzerland and the UK for the purposes described in this Privacy Policy. If you are based in the EEA, Switzerland or the UK and your Personal Data is transferred to a third country, that third country may not offer the same level of data protection as your home country.
                </p>

                <p>
                  However, we transfer Personal Data pursuant to applicable data protection laws. To transfer your Personal Data outside of the EEA, Switzerland or the UK, we rely on the European Commission's adequacy decisions on certain countries and, for other jurisdictions, we rely on the Standard Contractual Clauses as approved by the European Commission and any applicable country addenda. For more information on or to obtain a copy of the appropriate safeguards we have in place, please contact us at{' '}
                  <a href="mailto:filipp@trigub.tech" className="text-blue-600 hover:underline">
                    filipp@trigub.tech
                  </a>
                  .
                </p>

                <p>
                  By using our Services, you understand and acknowledge that your Personal Data will be processed and stored in our facilities and servers in the United States and may be disclosed to our service providers and affiliates in other jurisdictions.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Changes to the Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will post an updated version on this page, unless another type of notice is required by applicable law.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Contact Us</h2>
                <p>
                  Please contact support if you have any questions or concerns not already addressed in this Privacy Policy. Alternatively, you can write to us at{' '}
                  <a href="mailto:filipp@trigub.tech" className="text-blue-600 hover:underline">
                    filipp@trigub.tech
                  </a>{' '}
                  or the address above under Section 1 (Data Controller).
                </p>

                <p>
                  You can contact our Data Protection Officer at{' '}
                  <a href="mailto:filipp@trigub.tech" className="text-blue-600 hover:underline">
                    filipp@trigub.tech
                  </a>{' '}
                  in matters related to Personal Data processing.
                </p>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-semibold">TRIGUB TECHNOLOGIES OÜ</p>
                    <p>Email: filipp@trigub.tech</p>
                    <p>Address: Tartu mnt 67/1-13b, 10115, Tallinn, Harjumaa, Estonia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <div className="w-[97vw] mx-auto px-6 mb-8">
          <div className="bg-white rounded-3xl p-6">
            <Footer />
          </div>
        </div>
      </div>
  );
};

export default PrivacyPolicy;
