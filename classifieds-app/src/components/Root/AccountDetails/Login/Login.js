import React from "react";
import { useMutation } from "react-apollo";
import { gql } from "graphql-tag";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import TextInput from "#root/components/shared/TextInput";

const Label = styled.label`
    display: block;
    :not(:first-child) {
        margin-top: .75rem;
    }
`;

const LabelText = styled.strong`
    display:block;
    font-size: .9rem;
    margin-bottom: .25rem;
`;

const LoginButton = styled.button`
    display: inline-block;
    margin-top: .5rem;
`;

const mutation = gql`
    mutation($email: String!, $password: String!) {
        createUserSession(email: $email, password: $password) {
            id
            user {
                email
                id
            }
        }
    }
`;

const Login = () => {
    const [createUserSession] = useMutation(mutation);

    const {
        formState: { isSubmitting },
        handleSubmit,
        register
    } = useForm();

    const onSubmit = handleSubmit(async ({ email, password }) => {
        const result = await createUserSession({
            variables: {
                email,
                password
            }
        });
        console.log(result);
    });

    return <form onSubmit={onSubmit}>
        <Label>
            <LabelText>Email</LabelText>
            <TextInput disabled={isSubmitting} name="email" type="email" {...register('email')} />
        </Label>
        <Label>
            <LabelText>Password</LabelText>
            <TextInput disabled={isSubmitting} name="password" type="password" {...register('password')} />
        </Label>
        <LoginButton disabled={isSubmitting} type="submit">Login</LoginButton>
    </form>
}

export default Login;