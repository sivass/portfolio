export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="text-center mb-12">
            {subtitle && <p className="text-sm text-blue-600 font-semibold uppercase mb-2">{subtitle}</p>}
            <h2 className="text-5xl font-bold">{title}</h2>
        </div>
    )
}
