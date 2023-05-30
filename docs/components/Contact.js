import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import styles from "./every.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.contact_container}>
        <div className={styles.contact_infos}>
          <div>
            <h1>CONTACT</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "10rem",
              justifyContent: "space-around",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <BiPhoneCall style={{ width: "40px", height: "40px" }} />
              +90 545 555 55
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CiLocationOn
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              Osmanpasa cad. 34310 Avcılar/Istanbul
            </div>
          </div>
        </div>
        <div className={styles.contact_location}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24095.993254101137!2d28.67109561083983!3d40.98149929999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa045c12829c5%3A0x9d3fbdeef8ca1a6!2sAvc%C4%B1lar%20Park!5e0!3m2!1sen!2str!4v1681970595301!5m2!1sen!2str"
            width="500px"
            height="430px"
            style={{ border: "0", borderRadius: "45px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
