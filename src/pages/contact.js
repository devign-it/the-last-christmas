import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import MainContent from "../components/maincontent"

import { textSize, magicNumber } from "../components/variables"

const Contact = styled.div`
  width: 100%;
  display: flex;
  padding-top: ${magicNumber * 1.5}px;

  .form {
    position: relative;
    width: 50%;
    border: 1px solid #000;

    form {
      input,
      textarea {
        margin: 0;
        padding: 0;
        text-indent: ${magicNumber / 2}px;
        width: 100%;
        border: 0;
        border-bottom: 1px solid #000;
        height: ${magicNumber * 1.2}px;
        font-size: ${textSize.large};
        @media screen and (max-width: 1200px) {
          font-size: 2.5vw;
          height: 6vw;
          text-indent: 2.5vw;
        }
        &::placeholder {
          font-size: ${textSize.large};
          color: #0006;
          @media screen and (max-width: 1200px) {
            font-size: 2.5vw;
          }
        }
      }
      .message {
        width: calc(100% - ${magicNumber / 2}px);
        padding: ${magicNumber / 3}px 0 0 ${magicNumber / 2}px;
        height: ${magicNumber * 10}px;
        border-bottom: none;
        text-indent: 0;
        @media screen and (max-width: 1200px) {
          padding: 1.5vw 0 0 2.5vw;
          height: 50vw;
        }
      }

      .submit {
        position: absolute;
        right: -${magicNumber}px;
        bottom: -${magicNumber}px;
        width: ${magicNumber * 2}px;
        height: ${magicNumber * 2}px;
        background-color: #000;
        font-size: ${magicNumber / 2}px;
        font-family: inherit;
        color: #fff;
        //transition: top 100ms ease-in-out;
        // transform: translate(-50%, -50%);
        border-radius: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 1200px) {
          right: -5vw;
          bottom: -5vw;
          width: 10vw;
          height: 10vw;
          background-color: #000;
          font-size: 2.5vw;
        }
      }
    }
  }
`
const ContactDetails = styled.div`
  padding: 0 0 0 ${magicNumber * 2.5}px;
  @media screen and (max-width: 1200px) {
    padding: 0 0 0 12.5vw;
  }
  h5,
  p {
    font-size: ${textSize.large};
    line-height: ${magicNumber * 0.9}px;
    @media screen and (max-width: 1200px) {
      font-size: 2.5vw;
      line-height: 4.5vw;
    }
  }
`
export default function ContactPage() {
  return (
    <Layout title="Contact">
      <SEO title="Contact" />

      <MainContent>
        <Contact>
          <div className="form">
            <form
              data-netlify="true"
              //   method="post"
              //   action="https://getform.io/{your-unique-getform-endpoint}"
            >
              <input placeholder="Name" type="text" name="name" />
              <input placeholder="Email" type="email" name="email" />
              <textarea
                placeholder="Tell us all about your question here"
                className="message"
                type="text"
                name="message"
              />
              <button className="submit" type="submit">
                Send
              </button>
            </form>
          </div>
          <div style={{ width: "50%" }} className="details">
            <ContactDetails>
              <h5>Contact</h5>
              <p>info@thelastchristmas.com</p>
              <p>06121042392</p>
              <br />
              <h5>Partners</h5>
              <p>MediaMonks</p>
              <p>Since88</p>
              <p>Rolodex Agency</p>
              <p>Devign.it</p>
            </ContactDetails>
          </div>
        </Contact>
      </MainContent>
    </Layout>
  )
}
