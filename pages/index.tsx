import React, { useEffect,useState } from "react"

export default function Home() {

  const [liffScanResult, setLiffScanResult] = useState("No result data");
	const [liff, setLiff] = useState<any>(null);
  
  useEffect(() => {
    const login = async () => {
      const liff = (await import("@line/liff")).default;
      try {
        await liff.init({
          liffId: "1660829609-xz8VwZ73"
        });
      } catch (error) {
        console.error("liff init error", error);
      }
      if (!liff.isLoggedIn()) {
        liff.login();
      }
      setLiff(liff);
    }
    login()
  }, [])

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
