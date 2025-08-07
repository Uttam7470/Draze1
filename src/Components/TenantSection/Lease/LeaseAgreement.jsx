import React from "react";

const leaseDetails = {
  leaseStart: "2024-01-01",
  leaseEnd: "2024-12-31",
  rent: "₹12,000",
  deposit: "₹24,000",
  agreementUrl: "/sample-lease-agreement.pdf", // You can update this
};

const TenantLeaseAgreement = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Lease Agreement</h2>

      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Lease Start:</span>
          <span>{leaseDetails.leaseStart}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Lease End:</span>
          <span>{leaseDetails.leaseEnd}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Monthly Rent:</span>
          <span>{leaseDetails.rent}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Security Deposit:</span>
          <span>{leaseDetails.deposit}</span>
        </div>

        <div className="pt-4">
          <a
            href={leaseDetails.agreementUrl}
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Download Agreement
          </a>
        </div>
      </div>
    </div>
  );
};

export default TenantLeaseAgreement;
