import { Button, Result } from "antd";
import { History } from "history";
import React from "react";
import { useHistory } from "react-router-dom";
import { PageLayout } from "../../layout/PageLayout";

interface ResultContent {
  readonly result: "success" | "error";
  readonly icon: string;
  readonly buttonText: string;
  readonly buttonAction: () => void;
}

export interface OperationResultState {
  readonly success: boolean;
  readonly message: string;
  readonly error?: string;
  readonly customButtonText?: string;
  readonly customButtonActionPath?: string;
  readonly customButtonActionState?: any;
}

export interface OperationResultProps {
  readonly defaultButtonAction: (history: History) => void;
  readonly successIcon: string;
  readonly failIcon: string;
}

export function OperationResult({
  defaultButtonAction,
  successIcon,
  failIcon,
}: OperationResultProps): JSX.Element {
  const history = useHistory();

  const {
    success,
    message,
    error,
    customButtonText,
    customButtonActionPath,
    customButtonActionState,
  } = history.location.state as OperationResultState;

  function getResultContent(success: boolean): ResultContent {
    if (success) {
      return {
        result: "success",
        icon: successIcon,
        buttonText: "Home",
        buttonAction: () => defaultButtonAction(history),
      };
    }

    return {
      result: "error",
      icon: failIcon,
      buttonText: "Retry",
      buttonAction: history.goBack,
    };
  }

  const { result, buttonText, buttonAction } = getResultContent(success);

  const chosenButtonText = customButtonText || buttonText;
  const chosenButtonAction = customButtonActionPath
    ? () => history.push(customButtonActionPath, customButtonActionState)
    : buttonAction;

  return (
    <PageLayout>
      <Result
        status={result}
        title={success ? "" : message}
        subTitle={success ? message : error}
        extra={[
          <Button type="primary" onClick={chosenButtonAction}>{chosenButtonText}</Button>,
        ]}
      />
    </PageLayout>
  );
}
