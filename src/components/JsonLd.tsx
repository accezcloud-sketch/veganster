/**
 * Renders structured data as a plain server-rendered script tag.
 *
 * Deliberately not `next/script`: that injects on the client, so the JSON-LD
 * never reaches the served HTML and crawlers that don't execute JavaScript
 * (including the AI crawlers) never see it. `<` is escaped so a stray
 * "</script>" inside content cannot break out of the tag.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
