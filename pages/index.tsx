import React, { useState } from "react"
import liff from "@line/liff/core";
import ScanQrcodeV2 from "@line/liff/scan-code-v2"

liff.init({
  liffId: "1660829609-xz8VwZ73",
});

liff.use(new ScanQrcodeV2())

export default function Home() {

  const [liffScanResult, setLiffScanResult] = useState("No result data");

  const liffScan = async () => {
		try {
			const result = await liff.scanCodeV2();
			console.log("scanCodeV2 Success", result);
			setLiffScanResult(result.value as string);
		} catch (error) {
			console.log("scanCodeV2 Error", error);
		}
	};
  
  return (
   <>
    <button
        className="btn btn-primary"
        onClick={() => {
          liffScan();
        }}
      >
        Liff Scan User
      </button>
      <p>Liff scan Result : {liffScanResult}</p>
   </>
  )
}
