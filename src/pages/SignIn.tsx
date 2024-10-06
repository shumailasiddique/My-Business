import React from "react";
import { useTranslation } from "react-i18next";
import useSignIn from "../hooks/useSignIn";
import { useMediaQuery } from "react-responsive";
import SignInLayout from "../layouts/SignIn";
import LazyLoader from "../components/LazyLoader";

const FormButton = React.lazy(() => import("../components/FormButton"));

const SignInPage: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSignIn,
    loading,
    clearForm,
  } = useSignIn();

  return (
    <SignInLayout>
      <div id="left"></div>

      <div id="right">
        <form onSubmit={(e) => e.preventDefault()}>
          <LazyLoader
            fallback="Loading..."
            errorMessage="Failed to load button"
          >
            <FormButton
              onClick={handleSignIn}
              disabled={loading}
              onClear={clearForm}
            >
              {loading ? t("signing_in") : t("sign_in")}
            </FormButton>
          </LazyLoader>
        </form>
      </div>
    </SignInLayout>
  );
};

export default SignInPage;
