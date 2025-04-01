FROM mcr.microsoft.com/dotnet/sdk:8.0

RUN dotnet tool install -g pbm
ENV PATH="${PATH}:/root/.dotnet/tools"

WORKDIR /app/Advanced-Frontend-Final-Api
COPY ./ /app/Advanced-Frontend-Final-Api

RUN dotnet build .